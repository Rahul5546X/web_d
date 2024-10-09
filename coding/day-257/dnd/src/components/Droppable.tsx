/**
 *  In this component, we have created a droppable and defined the onDragOver, onDrop and OnDragEnter functions on it. We access the dropHandler function from context which is then passed to the onDrop function.
 */
import { deepCopy, isObjectHasKey } from 'tejas-react/esm/components/helpers';
import type { ResultPrevState, DroppableProps } from '../interfacesAndTypes/typesAndInterfaces';
import useDragDropContext from '../hooks/useDragDropContext';

function Droppable({ 
                     id,
                     originalData, 
                     setData, 
                     type,
                     isCombineEnabled = false,
                     children, 
                     ...droppableProps
                  }:DroppableProps){

   // const [prevIndex, setPrevIndex] = useState();                  
   // Accessing values from context.
   const contextValues = useDragDropContext();
   if(!contextValues) return;
   const { setResult, dropHandler, setPrevIndex } = contextValues;

   /**
    * This function finds the index of the item on which the dragged item is currently hovering.
    */
   function findDraggedOverItemIndex(dragOverItemId:string){
      let draggedOverItemIndex = -1;
      const originalDataCopy = deepCopy(originalData);

      originalDataCopy?.map((nestedObj) => {
         if(isObjectHasKey(nestedObj, 'items')){
            console.log("nested",nestedObj);
            if(draggedOverItemIndex == -1 && id !== 'outerMostDroppable' ){ // have to check this condition to know that whether items inside the droppable should re-order or the droppable should re-order.
               draggedOverItemIndex = nestedObj?.items.findIndex((item: { id: string; }) => (
                  item?.id === dragOverItemId
               ))
               console.log('destination index',draggedOverItemIndex);
               return; // return if we have a nested case
            }
            else if( id === 'outerMostDroppable' ){  // only for the case where droppables can also be re-ordered.
               console.log("That's what we want")
               draggedOverItemIndex = originalDataCopy.findIndex((nestedObj) => (
                  `${nestedObj.id}droppable` === dragOverItemId  // we have to add droppable here because we also added droppable in app.jsx in the first Draggable.
               ))
               console.log(draggedOverItemIndex, dragOverItemId);
            }
            return;
         }
         // If the object is not nested then this logic will execute.(else part)
         draggedOverItemIndex = originalDataCopy.findIndex((item) => (
            item?.id === dragOverItemId
         ))
         console.log(draggedOverItemIndex);
      })
      return draggedOverItemIndex;
   }
   /**
    * This function runs every time(few 100ms) when an element is being dragged over a valid drop target.
    * The event.preventDefault enables it to receive drop events. Basically the drop events will not work without onDragOver event.
    */
   function dragOverHandler(event:React.DragEvent){
      event?.preventDefault();
   }

   /**
    * This function runs a single time when a dragged items enters a valid drop zone.
    * With the help of event object we get access to the id of the element on which the dragged item is currently hovering.
    * Then as we have access to originalData, we'll find the index with the help of id, and update the result(destination and combine--set to null) using setResult(we got from context).
    * If the isCombinedEnable prop is true then we also have to update the result(combine) using setResult(we got from context).
    */
   function dragEnterHandler(event: React.DragEvent<HTMLElement>){
      event.stopPropagation(); // important otherwise we'll not be able to drop items in different droppables with same type.
      const dragOverItem = event?.target as HTMLElement;
      const dragOverItemId = dragOverItem.getAttribute('id')!;  // Non-null assertion operator is used.

      const draggedOverItemIndex = findDraggedOverItemIndex(dragOverItemId);
      
      if(draggedOverItemIndex === -1){
         console.log("keep prev");
         setPrevIndex((prevIndex) => prevIndex)
      } else{
         console.log("set new");
         setPrevIndex(draggedOverItemIndex);
      }
      
      setResult((prevState:ResultPrevState) => ({
         ...prevState,
         destination:{ 
            droppableId:id,
            index:draggedOverItemIndex,
            droppableType:type
         },
         combine:{ // Reset the combine object is isCombineEnabled is false
            droppableId:'',
            draggableId:''
         }
      }))

      if(isCombineEnabled){
         setResult((prevState:ResultPrevState) => ({
            ...prevState,
            combine:{
               draggableId: prevState.draggableId,
               droppableId: prevState.destination.droppableId,
            }
         }))
      }
   }

   return (
      <div 
         id = {id} 
         {...droppableProps}
         onDragEnter={(event) => dragEnterHandler(event)}
         onDragOver = {(event) => dragOverHandler(event)} 
         onDrop={(event)=> dropHandler(event,originalData,setData)} 
      >
         {children}
      </div>
   )
}

export default Droppable;
