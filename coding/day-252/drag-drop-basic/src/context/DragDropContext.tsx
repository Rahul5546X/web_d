// In this component, we create a context which provides three values(result-obj, setResult-function to update result and dropHandler- which should be passed to onDrop in Droppable)
import { createContext, useState } from "react";
import type { OriginalData, SetData, DragDropContextChildren, ContextValue } from "../interfacesAndTypes/typesAndInterfaces";

export const DragDropContext = createContext<ContextValue | null>(null);

const initialResult = {
   draggableId:'',
   source:{
      index:-1,
      droppableId:""
   },
   destination:{
      index:-1,
      droppableId:''
   },
}

// This function return a context provider which'll be wrapped throughout the whole app.
export function DragDropContextProvider({children}:DragDropContextChildren){

	const [result, setResult] = useState(initialResult);

   // Destructure the required values from result.
   const source = result?.source;
   const sourceIndex = source?.index; 
   const sourceDroppableId = source?.droppableId;
   const destination = result?.destination;
   const destinationIndex = destination?.index;
   const destinationDroppableId = destination?.droppableId;

   /**
    * This function performs operation on originalData(array of objects).
    * It copies the original data.
    * It removes a item from it's index(sourceIndex) using splice method and then add that item at different index(destinationIndex) using splice method.
    * At last it updates the newly created data.
    */
   // TODO not able to reorder if the data is nested
   function reOrderData( sourceIndex:number, destinationIndex:number, originalData:OriginalData , setData:SetData ){
      console.log(sourceIndex,destinationIndex)
      const newData = JSON.parse(JSON.stringify(originalData));
      const isNested = newData.some((list) => Array.isArray(list.items));

      if(isNested){
         const list = newData.find((list) => list.id === sourceDroppableId);
         if (list && list.items) {
            // Reorder the items within the nested list
            const updatedItems = [...list.items];
            const [draggedItem] = updatedItems.splice(sourceIndex, 1);
            updatedItems.splice(destinationIndex, 0, draggedItem);
      
            const updatedList = { ...list, items: updatedItems };
            const updatedData = newData.map(item => item.id === list.id ? updatedList : item);
            // Update the state with the new nested data
            console.log(updatedData);
            setData(prevData => {
               // Logic to create updatedData based on prevData
               return updatedData;
             });
      }
      }else{
         const [draggedItem] = newData.splice(sourceIndex,1);
         newData.splice(destinationIndex,0,draggedItem);
         setData(newData);
      }
   }   

   // TODO not able to update the state, data is correct but state is not updating.
   function moveBetweenDroppables(
      sourceIndex: number,
      destinationIndex: number,
      originalData: OriginalData,
      setData: SetData,
      sourceDroppableId: string,
      destinationDroppableId: string
    ) {
      const newData = JSON.parse(JSON.stringify(originalData)); // Deep copy of the original data
    
      const sourceList = newData.find((list) => list.id === sourceDroppableId);
      const destinationList = newData.find((list) => list.id === destinationDroppableId);
    
      if (sourceList && destinationList && sourceList.items) {
        // Remove the dragged item from the source list
        const updatedSourceItems = [...sourceList.items];
        const [draggedItem] = updatedSourceItems.splice(sourceIndex, 1); // Remove the item
    
        // Insert the dragged item into the destination list at the specified index
        const updatedDestinationItems = [...destinationList.items];
        updatedDestinationItems.splice(destinationIndex,0,draggedItem)
    
        // Update both lists
        const updatedSourceList = { ...sourceList, items: updatedSourceItems };
        const updatedDestinationList = { ...destinationList, items: updatedDestinationItems };
    
        // Update the overall data structure
        const updatedData = newData.map((list) => {
          if (list.id === updatedSourceList.id) return updatedSourceList;
          if (list.id === updatedDestinationList.id) return updatedDestinationList;
          return list;
        });
    
        setData(updatedData); // Update state
      }
    }
    
   /**
    * This function has access to result obj.
    * If there is no destination, we'll return.
    * If the source index is same as destination index, we'll return.
    * If the source index and destination index is different we'll reorder the originalData.
    */
	function dropHandler( event:React.DragEvent, originalData:OriginalData, setData:SetData ){
		event.preventDefault();

      console.log(result)
      // If there is no destination then we'll just return.
      if( !destination ) return;  

		// It means that user dropped the element in the same droppable and at same place from where user have dragged it.
		if( sourceDroppableId === destinationDroppableId && sourceIndex === destinationIndex ) return; 

		// It means that user dropped the element in same droppable but at different place.
		if( sourceDroppableId === destinationDroppableId){
         reOrderData( sourceIndex, destinationIndex, originalData, setData );
		   return;
		}

		// It means that user have dropped the element in different droppable.(NOT SUPPORTED CURRENTLY)
      if( sourceDroppableId !== destinationDroppableId){
         moveBetweenDroppables(sourceIndex,destinationIndex,originalData,setData,sourceDroppableId,destinationDroppableId);
      }
      console.log("different drop zones");
      console.log(`source id is ${result.source.droppableId} and destination id is ${result.destination.droppableId}`);
}
	const contextValue = {result,setResult,dropHandler}

	return(
		<DragDropContext.Provider value={contextValue} >
				{children}
		</DragDropContext.Provider>
	)
}

