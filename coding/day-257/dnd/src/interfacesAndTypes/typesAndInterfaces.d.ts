export type OriginalData = {
   id: string;
   desc:string;
   [key: string]: string;
}[] | {
   id: string;
   items: {
      id: string;
      desc:string;
      [key: string]: string;
   }[];
}[];

export type SetData = React.Dispatch<React.SetStateAction<{
   id: string;
   desc:string;
   [key: string]: string;
}[] | {
   id: string;
   items: {
      id: string;
      desc: string;
      [key: string]: string;
   }[];
}[]>>

export type SourceAndDestination = {
   index: number,
   droppableId: string,
   droppableType: string
}

export type ResultPrevState = {
   draggableId: string;
   source: {
      index: number;
      droppableId: string;
      droppableType: string
   };
   destination: {
      index: number;
      droppableId: string;
      droppableType: string
   };
   combine: {
      draggableId: string;
      droppableId: string;
   }
}

// Drag Drop Context Provider
export interface DragDropContextProps {
   onDragEnd?: (result: ResultPrevState) => void
   onChange?: (finalData:OriginalData) => void
   children?: React.ReactNode;
}

export interface ContextValue {
   result: ResultPrevState;
   setResult: React.Dispatch<React.SetStateAction<ResultPrevState>>;
   dropHandler: (event: React.DragEvent, originalData: OriginalData, setData: SetData) => void;
   setPrevIndex: React.Dispatch<React.SetStateAction<number|undefined>>;
}

// Droppable
export interface DroppableProps {
   id: string;
   originalData: OriginalData;
   setData: SetData;
   type: string;
   isCombineEnabled?: boolean;
   children?: React.ReactNode;
   className?: string;
}

// Draggable
export interface DraggableProps {
   id: string;
   droppableId: string;
   index: number;
   droppableType: string;
   children?: React.ReactNode;
   className?: string;
}
