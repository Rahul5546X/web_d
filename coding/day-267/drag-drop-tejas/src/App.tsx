/**
 * This is the main app component, the context provider is wrapped around the components where we want the functionality of drag and drop.
 * We have created two droppable but we can drop items only in one of them as the other has isDropDisabled prop set to it.
 */

import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { DragDropContextProvider } from './context/DragDropContext'
import { sidebarData, formElements } from './assets/data';
import type { ResultPrevState } from './interfaces/interfaces';
import Droppable from './components/Droppable';
import Draggable from './components/Draggable';
import FormElements from './components/FormElements';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

   const [sidebarVal, setSidebarVal] = useState(sidebarData);
   const [formElement, setFormElement] = useState(formElements);

   /**
    * This function will be provided by user, our goal is only to give access to result object in this function.
    * User can have custom logic to drop and drag items between droppables.
    */

 
   const createRandomKey = (length:number) => {
      return Math.random().toString(36).substr(2, length);
   };

   function dragEndHandler(result: ResultPrevState) {
      console.log("This is result", result);

      if (!result.destination) {
         console.log("Not valid destination ");
         return;
      }

      if (result.source.droppableId === result.destination.droppableId && result.source.index === result.destination.index) {
         console.log("same droppables and same index");
         return;
      }

      if (result.source.droppableId === result.destination.droppableId) {
         console.log("same droppable different index re-order");

         const newDestinationIndex = result.destination.index;
         const originalData = Array.from(formElement);

         const [draggedItem] = originalData.splice(result.source.index, 1);
         originalData.splice(newDestinationIndex, 0, draggedItem);
         console.log("Final data", originalData);
         setFormElement(originalData);
         return;
      }

      if (result.source.droppableId !== result.destination.droppableId && result.source.droppableType === result.destination.droppableType) {
         console.log("move from sidebar to form");

         const sourceArray = Array.from(sidebarVal);
         const destinationArray = Array.from(formElement);

         const [draggedItem] = sourceArray.splice(result.source.index, 1);
         sourceArray.splice(result.source.index, 0, draggedItem);
         // console.log(draggedItem);

         const newDestinationIndex = result.destination.index;
         destinationArray.splice(newDestinationIndex, 0, draggedItem);
         console.log("Final data", destinationArray);
         setSidebarVal(sourceArray);
         setFormElement(destinationArray);
         return;
      }

      console.log("DRAG DROP NOT SUPPORTED BETWEEN DIFFERENT TYPE OF DROPPABLES.");
      return;
   }

   return (
      <DragDropContextProvider onDragEnd={dragEndHandler}>
         <Container className='d-flex gap-3'>
            <Droppable
               id='sidebar'
               type='form-droppable'
               // data={sidebarVal}
               isDropDisabled={true}
               className='mb-5 p-5 bg-warning'
            >
               {
                  sidebarVal.map((val, index) => (
                     <Draggable
                        key={createRandomKey(3)}
                        id={createRandomKey(3)}
                        index={index}
                        droppableId='sidebar'
                        droppableType='form-droppable'
                        className='bg-light p-2 mb-4'
                     >
                        <div className='p-2'>
                           <span>{val.name}</span>
                        </div>
                     </Draggable>
                  ))
               }
            </Droppable>

            <Droppable
               id='form-container'
               type='form-droppable'
               // data={formElement}
               className='mb-5 p-5 bg-info'
            >
               {formElement.map((inputField, index) => (
                  <Draggable
                     // key={inputField.id}
                     key={createRandomKey(3)}
                     // id={inputField.id}
                     id={createRandomKey(5)}
                     index={index}
                     droppableId='form-container'
                     droppableType='form-droppable'
                     className='bg-light p-2 mb-5'
                  >
                     <FormElements id={createRandomKey(4)}  name={inputField.name} type={inputField.type} placeHolder={inputField.placeholder} />
                  </Draggable>
               ))
               }
            </Droppable>
         </Container>
      </DragDropContextProvider>
   )
}

export default App
