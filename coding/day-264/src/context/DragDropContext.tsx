/**
 * In this component we have created a context which provides two function one is to update the result object and it is used by <Draggable /> and <Droppable />
 * The other function is passed by user on onDragEnd prop which should run when the dragged item is dropped on a valid droppable.
 * We'll run that function only if the isDropDisabled prop is set to false on that droppable.
 * We'll also provide the access of result object to the function, so that user can define logic based on source and destination.
 */

import { useState, createContext } from 'react';
import type { DragDropContextProps, Result, ContextValue } from '../interfaces/interfaces';

const initialResult: Result = {
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
   }
}

// This value is used in custom hook.
export const DragDropContext = createContext<ContextValue | null>(null);

/**
 * This function return a context provider which'll be wrapped throughout the whole app.
 */
export function DragDropContextProvider({ onDragEnd, children }: DragDropContextProps) {

   const [result, setResult] = useState(initialResult);
   const [isDragging, setIsDragging] = useState(false);

   /**
    * This function checks that if the prop isDropDisabled is set on the droppable or not.
    * If the prop is false, only then we'll run the function that is passed by user on onDragEnd prop.
    */
   const dropHandler = (isDropDisabled: boolean) => {

      if (isDropDisabled) {
         console.log("Drop is disable");
         return;
      }

      setIsDragging(false);
      if (onDragEnd) onDragEnd?.(result); //The user will have access to the result object in there custom onDragEnd function.
   }

   const contextValue = { result, isDragging, setResult, setIsDragging, dropHandler };

   return (
      <DragDropContext.Provider value={contextValue} >
         {children}
      </DragDropContext.Provider>
   )
}