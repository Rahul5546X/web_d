export type OriginalData = {
   id: string;
   [key:string]: string;
}[];

export type SetData = React.Dispatch<React.SetStateAction<{
   id: string;
   [key:string]: string;
}[]>>

export type ResultPrevState = {
   draggableId: string;
   source: {
       index: number;
       droppableId: string;
   };
   destination: {
       index: number;
       droppableId: string;
   };
}

// Drag Drop Context Provider
export interface DragDropContextChildren {
   children? : React.ReactNode; 
}

export interface ContextValue {
   result: ResultPrevState;
   setResult: React.Dispatch<React.SetStateAction<ResultPrevState>>;
   dropHandler: (event: React.DragEvent, originalData: OriginalData, setData: SetData) => void;
}

// Droppable
export interface DroppableProps {
   droppableId: string;
   originalData: OriginalData ;
   setData: SetData ;
   children? : React.ReactNode; 
   className?:string;
}

// Draggable
export interface DraggableProps {
   draggableId: string;
   droppableId: string;
   index: number;
   children? : React.ReactNode; 
   className?:string;
}
