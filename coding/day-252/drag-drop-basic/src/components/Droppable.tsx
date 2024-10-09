// In this component, we have created a droppable and defined the onDragOver, onDrop and OnDragEnter functions on it. We access the dragEndHandler function from context which is then passed to the onDrop function.
import type { ResultPrevState, DroppableProps } from "../interfacesAndTypes/typesAndInterfaces";
import useDragDropContext from "../hooks/useDragDropContext";


function Droppable({ 
                     droppableId,
                     originalData, 
                     setData,  
                     children,
                     ...droppableProps
                  }:DroppableProps){

   // Accessing values from context.
   const contextValues = useDragDropContext();
   if(!contextValues) return;
   const { setResult, dropHandler } = contextValues;

   /**
    * This function runs every time(few 100ms) when an element is being dragged over a valid drop target.
    * The event.preventDefault enables it to receive drop events. Basically the drop events will not work without onDragOver event.
    */
   function dragOverHandler(event:React.DragEvent){
      event?.preventDefault();
   }

   /**
    * This function runs a single time when a dragged items enters a valid drop zone.
    * With the help of event object we get access to the id of the element on which the dragged item is currently hovering.
    * Then as we have access to originalData, we'll find the index with the help of id, and update the result(destination) using setResult(we got from context).
    */
   function dragEnterHandler(event: React.DragEvent<HTMLElement>){
      const dragOverItem = event?.target as HTMLElement;
      const dragOverItemId = dragOverItem.getAttribute('id');
      // console.log(dragOverItemId)
      // const originalDataCopy = [...originalData];
      const originalDataCopy = JSON.parse(JSON.stringify(originalData));
      // console.log(originalDataCopy)

      let draggedOverItemIndex = -1;

      originalDataCopy.map((list) => {
         // Check if the current list is nested
         // console.log(list);
         if (list.items && Array.isArray(list.items)) {
            // console.log('yes')
           // Check for the item in the nested items
           const indexInNested = list.items.findIndex((item) => item.id === dragOverItemId);
     
           if (indexInNested !== -1) {
               console.log(indexInNested)
               draggedOverItemIndex = indexInNested;
           }
         } else {
           // Non-nested case
         //   console.log("not nested")
           if (list.id === dragOverItemId) {
             draggedOverItemIndex = originalDataCopy.findIndex((item) => item.id === dragOverItemId);
           }
         }
       });

      if (draggedOverItemIndex === -1) {
         console.error("Item not found for dragging over");
      } else {
         setResult((prevState: ResultPrevState) => ({
           ...prevState,
           destination: { 
             droppableId,
             index: draggedOverItemIndex
           }
         }));
      }
   }

   return (
      <div 
         id = {droppableId} 
         {...droppableProps}
         onDragOver = {(event) => dragOverHandler(event)} 
         onDrop={(event)=> dropHandler(event,originalData,setData)} 
         onDragEnter={(event) => dragEnterHandler(event)}
      >
            {children}
      </div>
   )
}

export default Droppable;  