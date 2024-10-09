/**
 * In this component, we have created a droppable and defined the onDragOver, onDrop and OnDragEnter event listeners on it. 
 * We access the dropHandler function from context which is then passed to the onDrop function.
 * All the event handler will run only if the prop isDropDisabled is false, otherwise nothing happens on drop.
 */
import React, { Children, useRef, useState } from 'react';
import type { DroppableProps, ResultPrevState } from '../interfaces/interfaces';
import useDragDropContext from '../hooks/useDragDropContext';

function Droppable(
   {
      id,
      type,
      // data,
      isDropDisabled = false,
      className,
      children,
      ...droppableProps
   }: DroppableProps) {

   // const destUpdateCounterRef = useRef(0);  // This counter will tell us that the before dropping the dragged item, user have hovered over a valid destination index or not. 

   // Accessing values from context.
   const contextValues = useDragDropContext();
   if (!contextValues) return null; // Return null if context is not available
   const { isDragging, placeholderIndex, setResult, setIsDragging, dropHandler, setPlaceholderIndex } = contextValues;

   const droppableRef = useRef<HTMLDivElement | null>(null);
   const [isMouseInside, setIsMouseInside] = useState(false);

   /**
    * This function is used to find valid destination index so that the whole droppable can be accessible.
    */
   // function findValidDestIndex(draggedOverItemIndex:number, prevIndex:number, childrenArray:Element[]){
   //    let validDestIndex = draggedOverItemIndex;
     
   //    console.log("current index is and prev index is ", validDestIndex,prevIndex);
   //    if( draggedOverItemIndex === -1){
   //       if( destUpdateCounterRef.current === 0 ){  // In this case there will be no prev index so we'll add the item at top(start). The counter is reset to 0 every-time when a new drag starts. 
   //          console.log("This is first time, there is no valid destination index so item will be added at top", draggedOverItemIndex);
   //          validDestIndex = 0;
   //       } 
   //       else if( destUpdateCounterRef.current > 0 ){ // TODO:- In this case we'll have a valid prev index, find a condition such that it only works if items are dropped on other items(instead of the empty space). DONE, THE COUNTER IS RE-SETTED EVERY TIME WHEN A NEW DRAG STARTS.
   //          console.log("Not Valid destination, prev index not updated");
   //          console.log("counter val", destUpdateCounterRef);
   //          validDestIndex = prevIndex;
   //       }
   //       // else if(prevIndex === getArrayLength(childrenArray) ){
   //       //    console.log("Previously hovered over last element now trying to add between last and 2nd last");
   //       //    validDestIndex = prevIndex-1;
   //       // }
   //    }
   //    else if( draggedOverItemIndex === getArrayLength(childrenArray)-1 ){ // In this case user'll be trying to add the item at bottom(end) of the form.
   //       console.log("Valid destination and  last item");
   //       validDestIndex = draggedOverItemIndex+1;
   //       destUpdateCounterRef.current++;
   //    }
   //    else if( draggedOverItemIndex >= 0 ){  // In this case user'll be trying to add the item in a middle of the form.
   //       console.log("Valid destination and  previndex updated middle");
   //       validDestIndex = draggedOverItemIndex;
   //       destUpdateCounterRef.current++;
   //    }
   //    console.log("decided index is ", validDestIndex);
   //    return validDestIndex;
   // }

   function calculateValidDestIndex(mouseY: number, parentContainer:HTMLElement) {
      const droppableRect = parentContainer?.getBoundingClientRect();
      const childrenArray = Array.from(parentContainer.children); // Get droppable children
      
      const offsetTop = droppableRect ? droppableRect.top : 0;
      const offsetBottom = droppableRect ? droppableRect.bottom : window.innerHeight;

      // If the droppable area is empty
      if (childrenArray.length === 0) return 0;

      // If the mouse is above the first child, return 0 (top)
      if (mouseY < offsetTop) return 0;

      // If the mouse is below the last child, return the length of the children (bottom)
      if (mouseY > offsetBottom) return childrenArray.length;

      // Using map to create an array of indices where the mouseY is less than the bottom of the child
      // const validIndex = childrenArray.map((child) => child.getBoundingClientRect().bottom)
      // .findIndex((bottom) => mouseY < bottom);

      const validIndex = childrenArray.map((child) => {
         return child.getBoundingClientRect().bottom;
      }).findIndex((bottom) => {
         return mouseY < bottom;
      });
      
      // If a valid index is found, return it; otherwise, return the length of the array (insert at the end)
      return validIndex === -1 ? childrenArray.length : validIndex;
   }
   
   /**
    * This function runs a single time when a dragged items enters a valid drop zone.
    * With the help of event object we get access to the id of the element on which the dragged item is currently hovering.
    * Then with the help of event.currentTarget it gets all the element present inside the form and compare their id's to get a valid index.
    * Before updating the destination, we'll make sure that we have a valid destination index.
    */
   // function dragEnterHandler(event: React.DragEvent<HTMLElement>,) {
   //    if (isDropDisabled) {
   //       console.log("Drop disabled return");
   //       return;
   //    }
   //    setIsDragging(true);
   //    event.stopPropagation(); // important otherwise we'll not be able to drop items in different droppables with same type.
      
   //    const dragOverItem = event?.target as HTMLElement;

   //    setDraggedElement(event.target as HTMLElement);
   //    const dragOverItemId = dragOverItem.id;

   //    const formChildrens = event.currentTarget.children;  // The form container is current target.

   //    const childrenArray = [...formChildrens];
   //    const draggedOverItemIndex = childrenArray.findIndex(((item)=> (
   //       item?.id === dragOverItemId  // It's a comparison not an assignment so use === instead of =.
   //    )))

   //    console.log(draggedOverItemIndex);
   //    const prevIndex = result?.destination?.index; // have to find the valid prev index
   //    console.log("prev index is this and update counter values is this", prevIndex, destUpdateCounterRef)
   //    const validDestIndex = findValidDestIndex( draggedOverItemIndex, prevIndex, childrenArray )

   //    setResult((prevState: ResultPrevState) => ({
   //       ...prevState,
   //       destination: {
   //          droppableId: id,
   //          index: validDestIndex,
   //          droppableType: type
   //       }
   //    }))
   //    console.log('destination updated', destUpdateCounterRef);
   // }

   function dragEnterHandler(event: React.DragEvent) {
      if (isDropDisabled) {
         return;
      }

      event.stopPropagation(); // Prevent propagation to allow dropping in other droppables
      const mouseY = event.clientY; // Get mouse Y position
      const parentContainer = event.currentTarget as HTMLElement;
      const validDestIndex = calculateValidDestIndex(mouseY, parentContainer);

      // Update the result state with the new destination index
      setResult((prevState: ResultPrevState) => ({
         ...prevState,
         destination: {
            droppableId: id,
            index: validDestIndex,
            droppableType: type,
         },
      }));

      // Set the placeholder index
       setPlaceholderIndex((prevIndex) => {
         return prevIndex === validDestIndex ? prevIndex : validDestIndex;
      });

      // Set mouse as inside the droppable
      setIsMouseInside(true);

      console.log(validDestIndex, placeholderIndex);
   }

   /**
    * This function runs every time(few ~100ms) when an element is being dragged over a valid drop target.
    * The event.preventDefault enables it to receive drop events. Basically the drop events will not work without onDragOver event.
    */
   function dragOverHandler(event: React.DragEvent) {
      event.stopPropagation();
      event.preventDefault();
      if (isDropDisabled || !isMouseInside) {
         console.log("Drop disabled return");
         // setIsDragging(false);
         return;
      }
   }

   /**
    * 
    * TODO not have any specific use case yet.
    */
   function dragLeaveHandler(event:React.DragEvent){
      event.stopPropagation();
      console.log("Drag leave executed");

      if (!droppableRef.current || isDropDisabled) return;

      const droppableBounds = droppableRef.current.getBoundingClientRect();
      const { clientX, clientY } = event;

      // If mouse leaves the droppable area, reset the state
      if (
         clientX < droppableBounds.left ||
         clientX > droppableBounds.right ||
         clientY < droppableBounds.top ||
         clientY > droppableBounds.bottom
      ) {
         setIsMouseInside(false);
      }
      // setIsDragging(false)
   }

   /**
    * This function executes every-time when a dragged item is dropped at a in-valid location.
    * We can set the isDraggingState to false when this function is executed.
    */
   function dragEndHandler(event: React.DragEvent){
      event.stopPropagation();
      console.log("drag end executed");
      setIsDragging(false);
      setPlaceholderIndex(null);
   }

   const Placeholder = ({ height }: { height: number | null }) => {
      if (height === null) return null; // Don't render if height is null

      return (
         <div
            style={{
               height,
               backgroundColor: 'lightgray',
               border: '1px dashed gray',
               marginBottom: '3rem', // Space between items
               pointerEvents: 'none',
            }}
         >
            Placeholder
         </div>
      );
   };
   
   return (
      <div
         id={id}
         onDragEnter={(event) => dragEnterHandler(event)}
         onDragOver={(event) => dragOverHandler(event)}
         onDragLeave={(event) => dragLeaveHandler(event)}
         onDragEnd={(event) => dragEndHandler(event)}
         onDrop={() => dropHandler(isDropDisabled)}
         className= { isDragging && !isDropDisabled ? 'mb-5 p-5 bg-danger': `${className}` }
         {...droppableProps}
         ref={droppableRef}
      >
       {Children.map(children,(child, index) => 
            <>
                {placeholderIndex === index && !isDropDisabled && (<Placeholder height={50} />) }
                {child}
             </>
        )}
          {placeholderIndex !== null && placeholderIndex === React.Children.count(children) && (
            <Placeholder height={50} />
         )}
      </div>
   )
}

export default Droppable;