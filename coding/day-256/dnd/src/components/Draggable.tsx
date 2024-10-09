/**
 * In this component, we create draggable items(set draggable prop on them) and define onDragStart function. In onDragStart we update the result(that we got from context).
*/
import type { ResultPrevState, DraggableProps } from '../interfacesAndTypes/typesAndInterfaces';
import useDragDropContext from '../hooks/useDragDropContext';

function Draggable({ 
                     droppableId, 
							id, 
							index, 
                     droppableType,
							children, 
							...draggableProps
						}:DraggableProps){

   // Accessing values from context.
	const contextValues = useDragDropContext();
   if (!contextValues) return;
   const { setResult } = contextValues;

   /**
    * This function run every time when we drag an draggable item.
    * We'll update the result(draggableId, source) using setResult(we got from context) with index and droppableId.
    */
	function dragStartHandler(event:React.DragEvent){
      event.stopPropagation(); // to get the exact element that user have dragged(useful while there are nested droppables)
		setResult((prevState:ResultPrevState) => ({
			...prevState,
			draggableId:id,
			source:{ ...prevState.source,
				index,  
				droppableId,  
            droppableType
			}
		}))
	}

	return (
      <div 
         draggable
         id={id}
         onDragStart={(event) => dragStartHandler(event)}
         {...draggableProps}
      >
         {children}
      </div>
	)
}

export default Draggable;