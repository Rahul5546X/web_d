export type SidebarData = {
   [key: string]: string;
   id: string;
   name: string;
   type: string;
   placeholder: string
}[]

export type DroppableProps = {
   id: string,
   type: string,
   data: SidebarData,
   className?: string,
   isDropDisabled?: boolean,
   children?: React.ReactNode;
}

export type DraggableProps = {
   id: string,
   index: number,
   droppableId: string,
   droppableType: string,
   className?: string,
   children?: React.ReactNode
}

export type Result = {
   draggableId: string;
   source: {
      index: number;
      droppableId: string;
      droppableType: string;
   };
   destination: {
      index: number;
      droppableId: string;
      droppableType: string;
   };
}

export type ResultPrevState = {
   draggableId: string;
   source: {
      index: number;
      droppableId: string;
      droppableType: string;
   };
   destination: {
      index: number;
      droppableId: string;
      droppableType: string;
   };
}

export interface DragDropContextProps {
   onDragEnd: (result: ResultPrevState ) => void
   onChange?: (finalData: OriginalData) => void
   children?: React.ReactNode;
}

export interface ContextValue {
   result: Result;
   isDragging: boolean;
   setResult: React.Dispatch<React.SetStateAction<Result>>;
   setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
   dropHandler: (isDropDisabled: boolean) => void;
}

export type InputElements = {
   id: string,
   name: string,
   type: string,
   placeHolder: string,
}