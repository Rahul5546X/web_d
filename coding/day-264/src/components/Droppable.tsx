/**
 * In this component, we have created a droppable and defined the onDragOver, onDrop and OnDragEnter event listeners on it. 
 * We access the dropHandler function from context which is then passed to the onDrop function.
 * All the event handler will run only if the prop isDropDisabled is false, otherwise nothing happens on drop.
 */
import { useState } from 'react';
import type { DroppableProps } from '../interfaces/interfaces';
import useDragDropContext from '../hooks/useDragDropContext';

function Droppable(
   {
      id,
      type,
      data,
      isDropDisabled = false,
      className,
      children,
      ...droppableProps
   }: DroppableProps) {

      const [placeholderIndex, setPlaceholderIndex] = useState<number | null>(null);
   // Accessing values from context.
   const contextValues = useDragDropContext();
   if (!contextValues) return;
   const { isDragging, setResult, setIsDragging, dropHandler } = contextValues;
   
   /**
   * This function finds the index of the item on which the dragged item is currently hovering.
   */
   // function findDraggedOverItemIndex(dragOverItemId: string) {
   //    let draggedOverItemIndex = -1;
   //    const originalDataCopy = deepCopy(data);
   //    console.log('inside the function find draggedOverItemIndex ',dragOverItemId, originalDataCopy)

   //    draggedOverItemIndex = originalDataCopy?.findIndex((item) => (
   //       item?.id === dragOverItemId // Make sure that user set the id on the item.
   //    ))

   //    return draggedOverItemIndex;
   // }

   /**
    * This function is used to find valid destination index so that the whole droppable can be accessible.
    */
   // function findValidDestIndex(draggedOverItemIndex:number, prevIndex:number){
   //    let validDestIndex = draggedOverItemIndex;
     
   //    console.log("current index is and prev index is ", validDestIndex,prevIndex);
   //    if( draggedOverItemIndex === -1){
   //       if( destinationUpdateCounter.current === 0 ){  // In this case there will be no prev index so we'll add the item at top(start).
   //          console.log("This is first time, there is no valid destination index so item will be added at top", draggedOverItemIndex);
   //          validDestIndex = 0;
   //       } 
   //       else if( destinationUpdateCounter.current > 0 ){ // In this case we'll have a valid prev index.
   //          console.log("Not Valid destination, prev index not updated");
   //          validDestIndex = prevIndex;
   //       }
   //    }
   //    else if( draggedOverItemIndex === getArrayLength(data)-1 ){ // In this case user'll be trying to add the item at bottom(end) of the form.
   //       console.log("Valid destination and  last item");
   //       validDestIndex = draggedOverItemIndex+1;
   //       destinationUpdateCounter.current++;
   //    }
   //    else if( draggedOverItemIndex >= 0 ){  // In this case user'll be trying to add the item in a middle of the form.
   //       console.log("Valid destination and  previndex updated middle");
   //       validDestIndex = draggedOverItemIndex;
   //       destinationUpdateCounter.current++;
   //    }
   //    console.log("decided index is ", validDestIndex);
   //    return validDestIndex;
   // }

   const findValidDestIndex = (event:React.DragEvent) => {
      const target = event.currentTarget; // The droppable area
      const childrenArray = Array.from(target.children); // Get all child elements
      const { clientY } = event;
  
      // Check if dragging over the empty space above the first item
      if (childrenArray.length === 0) {
          return 0; // If no children, we can drop at index 0
      }
  
      // Check if dragging over the empty space below the last item
      const lastChild = childrenArray[childrenArray.length - 1];
      const lastChildBottom = lastChild.getBoundingClientRect().bottom;
      if (clientY > lastChildBottom) {
         //  return childrenArray.length; // Drop after the last item
          return 0; // Drop after the last item
      }
  
      // Check the space between items
      for (let i = 0; i < childrenArray.length - 1; i++) {
          const top = childrenArray[i].getBoundingClientRect().bottom;
          const bottom = childrenArray[i + 1].getBoundingClientRect().top;
  
          // Check if the clientY is between the bottom of the current child and the top of the next child
          if (clientY >= top && clientY <= bottom) {
              return i + 1; // Return index to insert after the current item
          }
      }
  
      // Default case, if no index found, drop at the end
      return null; 
  };
  
  
   /**
    * This function runs a single time when a dragged items enters a valid drop zone.
    * With the help of event object we get access to the id of the element on which the dragged item is currently hovering.
    * Then as we have access to originalData, we'll find the index with the help of id, and update the result(destination) using setResult(we got from context).
    * Before updating the destination, we'll make sure that we have a valid destination index.
    */
   function dragEnterHandler(event: React.DragEvent<HTMLElement>,) {
      if (isDropDisabled) {
         console.log("Drop disabled return");
         return;
      }
      event.stopPropagation(); // important otherwise we'll not be able to drop items in different droppables with same type.
      setIsDragging(true);
      
      // const dragOverItem = event?.target as HTMLElement;
      // console.log(event.target);

      // const dragOverItemId = dragOverItem.getAttribute('id')!;  // Non-null assertion operator is used.
      // const draggedOverItemIndex = findDraggedOverItemIndex(dragOverItemId);
      // const prevIndex = result.destination.index;  // have to find the prev index valid
      // const validDestIndex = findValidDestIndex( draggedOverItemIndex, prevIndex)

      // setResult((prevState: ResultPrevState) => ({
      //    ...prevState,
      //    destination: {
      //       droppableId: id,
      //       index: validDestIndex,
      //       droppableType: type
      //    }
      // }))

      // const target = event.currentTarget; // The droppable area
      // const childrenArray = Array.from(target.children); // Get all child elements

      // Determine the hovered index
      const hoveredIndex = findValidDestIndex(event); // Find the hovered child's index

      setPlaceholderIndex(hoveredIndex); 
      // Update your state with the new destination
      setResult((prevState) => ({
         ...prevState,
         destination: {
            droppableId: id,
            index: hoveredIndex, // Append to the end if no valid index
            droppableType: type,
         },
      }));
   }

   /**
    * This function runs every time(few 100ms) when an element is being dragged over a valid drop target.
    * The event.preventDefault enables it to receive drop events. Basically the drop events will not work without onDragOver event.
    */
   function dragOverHandler(event: React.DragEvent) {
      if (isDropDisabled) {
         console.log("Drop disabled return");
         setIsDragging(false)
         return;
      }
      event.preventDefault();
   }

   /**
    * 
    * TODO not have any specific use case yet.
    */
   // function dragLeaveHandler(event:React.DragEvent){
   //    event.stopPropagation();
   //    console.log("Drag leave executed");
   // }

   function handleDrop(event: React.DragEvent) {
      dropHandler(isDropDisabled);
      setPlaceholderIndex(null); // Clear placeholder on drop
   }

   return (
      <div
         id={id}
         onDragEnter={dragEnterHandler}
         onDragOver={dragOverHandler}
         onDrop={handleDrop}
         className={isDragging && !isDropDisabled ? 'mb-5 p-5 bg-danger' : className}
         {...droppableProps}
      >
         {children}
         {/* Render a placeholder if there's a valid index */}
         {placeholderIndex !== null && (
            <div
               className="placeholder"
               style={{
                  height: '50px', // Adjust this to match the height of your elements
                  backgroundColor: 'rgba(0, 123, 255, 0.2)', // Light blue for visibility
                  border: '2px dashed #007bff', // Dashed border
                  margin: placeholderIndex > 0 ? '10px 0' : '0', // Spacing around the placeholder
               }}
            >
               Drop here
            </div>
         )}
      </div>
   );
}

export default Droppable;