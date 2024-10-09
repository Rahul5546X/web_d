// In this component, we create draggable items(set draggable prop on them) and define onDragStart function. In onDragStart we update the result(that we got from context).
import type { ResultPrevState, DraggableProps } from "../interfacesAndTypes/typesAndInterfaces";
import useDragDropContext from "../hooks/useDragDropContext";

function Draggable({ 
                     droppableId, 
							draggableId, 
							index, 
							children, 
							...draggableProps
						}:DraggableProps){

   // Accessing values from context.
	const contextValues = useDragDropContext();
   if(!contextValues) return;
   const {setResult} = contextValues;

   /**
    * This function run every time when we drag an draggable item.
    * We'll update the result(draggableId, source) using setResult(we got from context) with index and droppableId.
    */
	function dragStartHandler(){
		setResult((prevState:ResultPrevState) => ({
			...prevState,
			draggableId,
			source:{ ...prevState.source,
				index,  
				droppableId,  
			}
		}))
	}

	return (
		<div 
			draggable
			id={draggableId}
			onDragStart={dragStartHandler}
			{...draggableProps}
		>
			{children}
		</div>
	)
}

export default Draggable;