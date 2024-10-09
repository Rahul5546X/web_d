/**
 * In this component, we create a context which provides values(result-obj, setResult-function to update result ,dropHandler- which should be passed to onDrop in Droppable, changeHandler- which has access to the final data if our defaultDropHandler is executed.)
 */
import { useState, createContext } from 'react';
import { deepCopy, isObjectHasKey, getArrayLength } from 'tejas-react/helpers';
import type { OriginalData, SetData, DragDropContextProps, ContextValue, SourceAndDestination } from '../interfacesAndTypes/typesAndInterfaces';

export const DragDropContext = createContext<ContextValue | null>(null);

const initialResult = {
   draggableId: '',
   source: {
      index: -1,
      droppableId: '',
      droppableType: ''
   },
   destination: {
      index: -1,
      droppableId: '',
      droppableType: ''
   },
   combine: {
      draggableId: '',
      droppableId: ''
   }
}
let finalData:OriginalData;

/**
 * This function is a helper function whenever we have to update the data and state we can call this function.
 * update the data:- Remove the item of array from one index(sourceIndex) and add it at another index(destinationIndex) using splice.
 */
function updateState(data: OriginalData, sourceIndex: number, destinationIndex: number, setData: SetData) {
   const [draggedItem] = data.splice(sourceIndex, 1);
   data.splice(destinationIndex, 0, draggedItem);
   finalData = data;
   setData(data);
}

/**
 * This function runs when the user perform drag and drop in same droppable but at different index.
 * If the data is not nested, then it calls the helper function (updateState).
 * If the data is nested, then it compares the nested data id with our sourceDroppableId so that the other Droppable's data doesn't get affected then it update the data and state.
 * If the sourceDroppableId is outerMostDroppables then it means we are trying to re-order the droppables, so it calls the helper function (updateState).
 */
function reOrderData(sourceIndex: number, destinationIndex: number,sourceDroppableId:string, originalData: OriginalData, setData: SetData, prevIndex:number|undefined ) {

   console.log('this is valid prev index re-order',prevIndex);
   // if(destinationIndex === -1) return;
   const originalDataCopy = deepCopy(originalData);
   let isNested = false;
   let newDestinationIndex;

   originalDataCopy?.map((dataItems) => {
      if (isObjectHasKey(dataItems, 'items')) {
         isNested = true;
      }
   })

   if (isNested) {
      originalDataCopy?.map((dataItems) => {
         // TODO this condition should be optimized so it works for both the nested cases.
         if (dataItems.id === sourceDroppableId) {  // This condition makes sure that droppable items are independent of other droppables as the id's are not equal in the following case.
            const [draggedItem] = dataItems.items.splice(sourceIndex, 1);

          if(destinationIndex === -1){
               console.log("prev executed move btw nested");
               newDestinationIndex = destinationIndex;
               if(prevIndex === 0)  newDestinationIndex = 0; 
               else if(prevIndex) newDestinationIndex = prevIndex + 1; 
               dataItems.items.splice(newDestinationIndex, 0, draggedItem);
            }else{
               dataItems.items.splice(destinationIndex, 0, draggedItem);
            }

          finalData = originalDataCopy;
          setData(originalDataCopy);
         }
         else if (sourceDroppableId === 'outerMostDroppable') {  // we have hardcoded the id in app.tsx due to which the above condition will fail here. So we have to handle the logic again. This condition is only for the case when the droppables can also be re-ordered.
            const newData = deepCopy(originalDataCopy);

            if(destinationIndex === -1){
               console.log("prev executed move btw nested droppables");
               newDestinationIndex = destinationIndex;
               if(prevIndex === 1 ) newDestinationIndex = 0; // item should be added at first.  
               else if( prevIndex === 0)  newDestinationIndex = 0;
               else if( prevIndex > 0) newDestinationIndex = prevIndex;  //item should be added at prev index.
               updateState(newData, sourceIndex, newDestinationIndex, setData);
            }else{
               updateState(newData, sourceIndex, destinationIndex, setData);
            }
         }
         return;
      })
   } else { // The data is not nested.
      if(destinationIndex === -1){
         console.log("prev executed move btw not nested");
         newDestinationIndex = destinationIndex;
         if( prevIndex === 0)  newDestinationIndex = 0;
         else if( prevIndex > 0) newDestinationIndex = prevIndex;  //item should be added at prev index.
         updateState(originalDataCopy, sourceIndex, newDestinationIndex, setData);
      }else{
         updateState(originalDataCopy, sourceIndex, destinationIndex, setData);
      }
   }
}

/**
 * This function is responsible for drag and drop items in a different droppable.
 * It'll run only if the data is nested.
 * We'll create two list's named sourceList and destinationList as we have access to sourceDroppableId and destinationDroppableId.
 * After that we'll remove the dragged item from the sourceList and add it to destinationList.
 * The function also uses certain conditions to find the proper destination index.
 */
function moveBetweenDroppables(sourceIndex: number, destinationIndex: number, sourceDroppableId:string, destinationDroppableId:string, originalData: OriginalData, setData: SetData, prevIndex:number|undefined) {

   console.log('move between');
   console.log('this is valid prev index moveBTW',prevIndex);
   const originalDataCopy = deepCopy(originalData);
   let sourceItemList;
   let destinationItemList;

   originalDataCopy.map((nestedObj) => {
      if (nestedObj.id === sourceDroppableId) sourceItemList = nestedObj.items
      if (nestedObj.id === destinationDroppableId) destinationItemList = nestedObj.items
   })

   const [draggedItem] = sourceItemList!.splice(sourceIndex, 1);  // Non-null assertion operator is used.
   const destinationArrLength = getArrayLength(destinationItemList);

   let newDestinationIndex = destinationIndex;  // If not any of the following conditions met then the item will be added at its original destination index.

   // These conditions are used to set a correct value in destination index.
   // It means the destination array contains only 1 element, so if we drop an item on it, the dropped item will be added at start of the destination array.

   if(destinationIndex === -1){
      console.log("prev executed move btw");
      if(prevIndex === 0)  newDestinationIndex = 0; 
      else if( prevIndex ) newDestinationIndex = prevIndex + 1;  //item should be added at prev index.
      else if( destinationArrLength === 0) newDestinationIndex = destinationIndex;  // It means the destination array is empty, so we have to add an item to it.
   } 
   else if( destinationArrLength === 1  ) newDestinationIndex = destinationIndex;
   else if( destinationArrLength-1 === destinationIndex) newDestinationIndex = destinationIndex+1;

   destinationItemList!.splice(newDestinationIndex, 0, draggedItem); // Non-null assertion operator is used.
   finalData = originalDataCopy;
   setData(originalDataCopy);
}

//  ! THE FOLLOWING FEATURE IS NOT NEEDED YET. We have to trade between combine or re-ordering feature in a list, we can not apply both to a list.(It also work for the non-nested data).
/**
 * This function is used to combine two list items if the isCombineEnabled prop is true on the Droppable.
 * It removes the dragged item from its source list and then with the help of destination index, it appends the content of the draggedItem into the item which is present at the destination index.
 * As the draggedItem is removed, we have to calculate the destination index again with the help of source index.
 */
function combineListItems(sourceIndex: number, destinationIndex: number, sourceDroppableId:string, destinationDroppableId:string, originalData: OriginalData, setData: SetData) {

   if(destinationIndex === -1 ) return; 
   if (sourceDroppableId === destinationDroppableId) {
      const originalDataCopy = deepCopy(originalData);
      const [draggedItem] = originalDataCopy.splice(sourceIndex, 1);
      console.log("D", draggedItem);
      let newDestinationIndex;

      // we are removing the dragged item so we have to adjust the destination index according to it.
      if (destinationIndex > sourceIndex) newDestinationIndex = destinationIndex - 1;
      else if (destinationIndex < sourceIndex) newDestinationIndex = destinationIndex;
      else return;

      originalDataCopy[newDestinationIndex].id = `${originalDataCopy[newDestinationIndex].id}-${draggedItem.id}`;
      originalDataCopy[newDestinationIndex].desc = `${originalDataCopy[newDestinationIndex].desc} ${draggedItem.desc}`;
      finalData = originalDataCopy;
      setData(originalDataCopy);
      return;
   }
   // TODO differentiate that what user want to do, drag and drop or drag and combine.
   // if (sourceDroppableType === destinationDroppableType) {
   //    console.log("try to combine nested")
   // }
}

/**
 * This function return a context provider which'll be wrapped throughout the whole app.
 */
export function DragDropContextProvider({ onDragEnd, onChange, children }: DragDropContextProps) {

   const [result, setResult] = useState(initialResult);
   const [prevIndex, setPrevIndex] = useState();                  

   // TODO:- Implement nested object destructuring.
   // Destructure the required values from result. 
   const source: SourceAndDestination = result?.source;
   const sourceIndex: number = source?.index;
   const sourceDroppableId: string = source?.droppableId;
   const sourceDroppableType: string = source?.droppableType;

   const destination: SourceAndDestination = result?.destination;
   const destinationIndex: number = destination?.index;
   const destinationDroppableId: string = destination?.droppableId;
   const destinationDroppableType: string = destination?.droppableType;

   const combine = result?.combine;

   /**
    * If there is no destination, we'll return.
    * If the source index is same as destination index, we'll return.
    * If the source index and destination index is different we'll reorder the originalData.
    */
   function defaultDropHandler(event: React.DragEvent, originalData: OriginalData, setData: SetData) {
      event.preventDefault();
      // console.log(result);
      console.log("inside defaultDropHandler");
      // If there is no destination then we'll just return.
      if (!destination) return;

      // It means that user dropped the element in the same droppable and at same place from where user have dragged it.
      if (sourceDroppableId === destinationDroppableId && sourceIndex === destinationIndex) return;

      // It means that user is trying to combine the dragged item with the item on which they drop it.
      // ! THIS FEATURE IS NOT NEEDED YET. We have to trade between combine or re-ordering feature in a list, we can not apply both to a list.(It also work for the non-nested data).
      if (combine.droppableId) {
         combineListItems(sourceIndex, destinationIndex, sourceDroppableId, destinationDroppableId, originalData, setData);
         // console.log("this is final data",finalData)
         return;
      }

      // It means that user dropped the element in same droppable but at different place.
      if (sourceDroppableId === destinationDroppableId) {
         reOrderData(sourceIndex, destinationIndex, sourceDroppableId, originalData, setData, prevIndex);
         // console.log("this is final data",finalData)
         return; // if we re-ordered the data then there is no need to execute the code below.
      }

      // It means that user dropped the element in different droppable which has same types as of source droppable(VALID).
      if (sourceDroppableId !== destinationDroppableId && sourceDroppableType === destinationDroppableType) {
         console.log("different drop zones");
         console.log(`source id is ${result.source.droppableId} and destination id is ${result.destination.droppableId}`);
         moveBetweenDroppables(sourceIndex, destinationIndex, sourceDroppableId, destinationDroppableId, originalData, setData, prevIndex);
         // console.log("this is final data",finalData);
         return;
      }
      // It means that user dropped the element in different droppable which has different type as of source droppable(NOT-VALID).
      console.log("The droppables have different types.");
   }

   // If user does not provide a onDragEnd function then our default fallback function will be executed.
   const dropHandler = (event: React.DragEvent, originalData:OriginalData, setData:SetData) => {

      // if(destinationIndex === -1 ) return; //This condition will make sure that the destination index is a valid value as the splice method supports the negative index, so if destination index is -1 the item will be added at 2nd last position of the array. But if we use it here then we have to write more logic to drop a item in an empty droppable, so currently we are performing this check in every function.

      if(onDragEnd) onDragEnd?.(result); //The user will have access to the result object in there custom onDragEnd function.
      else {
         defaultDropHandler(event, originalData, setData);
         if(finalData) onChange?.(finalData); // we only have the access to the final data if user uses our default drop handler
      }
   }

   const contextValue = { result, setResult, dropHandler, setPrevIndex };
   
   return (
      <DragDropContext.Provider value={contextValue} >
         {children}
      </DragDropContext.Provider>
   )
}

