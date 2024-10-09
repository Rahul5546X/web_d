import { useContext } from "react";
import { DragDropContext } from "../context/DragDropContext";

// we can use this custom hook to access the values provided by the context.
function useDragDropContext(){
	return useContext(DragDropContext);
}

export default useDragDropContext;