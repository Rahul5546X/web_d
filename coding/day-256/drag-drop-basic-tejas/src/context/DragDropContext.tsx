/**
 * In this component, we create a context which provides three values(result-obj, setResult-function to update result and dropHandler- which should be passed to onDrop in Droppable)
 */
import { createContext, useState } from 'react';
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
 * This function is used to update the state with new data based on the sourceIndex and the destinationIndex with the help of splice.
 */
function updateState(data: OriginalData, sourceIndex: number, destinationIndex: number, setData: SetData) {
   const [draggedItem] = data.splice(sourceIndex, 1);
   data.splice(destinationIndex, 0, draggedItem);
   finalData = data;
   setData(data);
}

/**
 * This function return a context provider which'll be wrapped throughout the whole app.
 */
export function DragDropContextProvider({ onDragEnd, onchange, children }: DragDropContextProps) {

   const [result, setResult] = useState(initialResult);

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
    * This function performs operation on originalData(array of objects).
    * It copies the original data.
    * It removes a item from it's index(sourceIndex) using splice method and then add that item at different index(destinationIndex) using splice method.
    * At last it updates the newly created data.
    */
   function reOrderData(sourceIndex: number, destinationIndex: number, originalData: OriginalData, setData: SetData) {

      const originalDataCopy = deepCopy(originalData);
      let isNested = false;

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
               dataItems.items.splice(destinationIndex, 0, draggedItem);
               finalData = originalDataCopy;
               setData(originalDataCopy);
            }
            else if (sourceDroppableId === 'outerMostDroppable') {  // we have changed the id in app due to which the above condition will fail here. So we have to handle the logic again. This condition is only for the case when the droppables can also be re-ordered.
               const newData = deepCopy(originalDataCopy);
               updateState(newData, sourceIndex, destinationIndex, setData);
            }
            return;
         })
      } else { // The data is not nested.
         updateState(originalDataCopy, sourceIndex, destinationIndex, setData);
      }
   }

   /**
    * This function is responsible for dropping the dragged items in a different droppable.
    */
   function moveBetweenDroppables(sourceIndex: number, destinationIndex: number, originalData: OriginalData, setData: SetData) {

      console.log('move between');
      const newData = deepCopy(originalData);
      let sourceItemList;
      let destinationItemList;

      newData.map((nestedObj) => {
         if (nestedObj.id === sourceDroppableId) sourceItemList = nestedObj.items
         if (nestedObj.id === destinationDroppableId) destinationItemList = nestedObj.items
      })

      const [draggedItem] = sourceItemList!.splice(sourceIndex, 1);  // Non-null assertion operator is used.
      let newDestinationIndex = destinationIndex;

      const destinationItemLength = getArrayLength(destinationItemList);

      // If the item is dropped on last item of the list, then this condition make sure that item is added at last of the list and similarly if it is dropped on first item, then this condition make sure that item is added at start of the list(if there is only one item in the list).
      newDestinationIndex = (destinationItemLength - 1) === destinationIndex && (destinationItemLength > 1) ? destinationIndex + 1 : destinationIndex;

      destinationItemList!.splice(newDestinationIndex, 0, draggedItem); // Non-null assertion operator is used.
      finalData = newData;
      setData(newData);
   }

   /**
    * This function is used to combine two list items if the isCombineEnabled prop is true on the Droppable.
    * It removes the dragged item from its source list and then with the help of destination index, it appends the content of the draggedItem into the item which is present at the destination index.
    * As the draggedItem is removed, we have to calculate the destination index again with the help of source index.
    */
   function combineListItems(sourceIndex: number, destinationIndex: number, originalData: OriginalData, setData: SetData) {

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
      if (sourceDroppableType === destinationDroppableType) {
         console.log("try to combine nested")
      }
   }

   /**
    * This function has access to result obj.
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
      // ! THIS FEATURE IS NOT NEEDED YET.
      if (combine.droppableId) {
         combineListItems(sourceIndex, destinationIndex, originalData, setData);
         // console.log("this is final data",finalData)
         return;
      }

      // It means that user dropped the element in same droppable but at different place.
      if (sourceDroppableId === destinationDroppableId) {
         reOrderData(sourceIndex, destinationIndex, originalData, setData);
         // console.log("this is final data",finalData)
         return; // if we re-ordered the data then there is no need to execute the code below.
      }

      // It means that user dropped the element in different droppable which has same types as of source droppable(VALID).
      if (sourceDroppableId !== destinationDroppableId && sourceDroppableType === destinationDroppableType) {
         console.log("different drop zones");
         console.log(`source id is ${result.source.droppableId} and destination id is ${result.destination.droppableId}`)
         moveBetweenDroppables(sourceIndex, destinationIndex, originalData, setData);
         // console.log("this is final data",finalData)
         return;
      }
      // It means that user dropped the element in different droppable which has different type as of source droppable(NOT-VALID).
      console.log("The droppables have different types.")
   }

   // If user does not provide a onDragEnd function then our default fallback function will be executed.
   const dropHandler = onDragEnd?.(result) || defaultDropHandler;
   // const dropHandler = onDragEnd?.(result) ? onDragEnd?.(result) : defaultDropHandler;
   // const dropHandler = defaultDropHandler;
   const changeHandler = onchange?.(finalData);

   const contextValue = { result, setResult, dropHandler, changeHandler };
   
   return (
      <DragDropContext.Provider value={contextValue} >
         {children}
      </DragDropContext.Provider>
   )
}

