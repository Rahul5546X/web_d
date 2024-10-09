/**
 * In this component we have created a context which provides two functions: one to update the result object,
 * which is used by <Draggable /> and <Droppable />, and the other function passed by user on onDragEnd prop 
 * which should run when the dragged item is dropped on a valid droppable.
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
};

// This value is used in custom hook.
export const DragDropContext = createContext<ContextValue | null>(null);

/**
 * This function returns a context provider which will be wrapped throughout the whole app.
 */
export function DragDropContextProvider({ onDragEnd, children }: DragDropContextProps) {

   const [result, setResult] = useState(initialResult);
   const [isDragging, setIsDragging] = useState(false);
   const [placeholderIndex, setPlaceholderIndex] = useState<number | null>(null);

   /**
    * This function checks if the prop isDropDisabled is set on the droppable or not.
    * If the prop is false, only then we'll run the function that is passed by user on onDragEnd prop.
    */
   const dropHandler = (isDropDisabled: boolean) => {
      setIsDragging(false); // set the dragging state to false, no matter if drop is disabled or not.
      setPlaceholderIndex(null);
      if (isDropDisabled) {
         console.log("Drop is disabled");
         return;
      }

      if (onDragEnd) onDragEnd?.(result); // The user will have access to the result object in their custom onDragEnd function.
   };

   // Function to create a random key
   const createRandomKey = (length: number) => {
      return Math.random().toString(36).substr(2, length);
   };

   const contextValue = { result, isDragging, placeholderIndex, setResult, setIsDragging, setPlaceholderIndex, dropHandler, createRandomKey };

   return (
      <DragDropContext.Provider value={contextValue}>
         {children}
      </DragDropContext.Provider>
   );
}
