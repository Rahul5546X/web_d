/**
 * This is the main app component, in this we wrap our whole app with DragDropContextProvider, and every Draggable is placed inside a Droppable.
 */
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { DragDropContextProvider } from './context/DragDropContext';
import { toysList, foodItemsList, superHeroesData, toysFood } from './assets/data';
import { OriginalData, ResultPrevState } from './interfacesAndTypes/typesAndInterfaces';
import Droppable from './components/Droppable';
import Draggable from './components/Draggable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   const [toyList, setToysList] = useState(toysList); //combine list items
   const [foodItemList, setFoodItems] = useState(foodItemsList); //re-order list items
   const [superHeroes, setSuperHeroes] = useState(superHeroesData); //  move between droppables
   const [toysFoodItems, setToysFoodItems] = useState(toysFood);// re-order droppables and move between droppables

   // function dragEndHandler(result:ResultPrevState) { 
   //    console.log("Hi this is custom function and you have access to result object");
   //    console.log("this is result", result);
   // }

   function getFinalData(finalData:OriginalData){
      console.log('hi inside getFinal data',finalData);
   }

   return (
      <DragDropContextProvider onChange={getFinalData}>
         <Container>

            <h2>Re-order + combine(in 1st)</h2>
            <Droppable
               id='toysDroppable'
               originalData={toyList}
               setData={setToysList}
               type='toysDroppable'
               isCombineEnabled = {true}
               className='mb-5 p-3 bg-warning'
            >
               {toyList?.map((item, index) => (
                  <Draggable
                     droppableId='toysDroppable'
                     key={item?.id}
                     id={item?.id}
                     index={index}
                     droppableType='toysDroppable'
                     className='bg-light p-2 mb-2'
                  >
                     {item?.desc}
                  </Draggable>
               ))}
            </Droppable>

            <Droppable
               id='foodDroppable'
               originalData={foodItemList}
               setData={setFoodItems}
               type='foodDroppable'
               className='mb-5 p-3 bg-warning'
            >
               {foodItemList?.map((item, index) => (
                  <Draggable
                     droppableId='foodDroppable'
                     key={item?.id}
                     id={item?.id}
                     index={index}
                     droppableType='foodDroppable'
                     className='bg-light p-2 mb-2'
                  >
                     {item?.desc}
                  </Draggable>
               ))}
            </Droppable>

            <h2 className='mb-5'>Move between droppable</h2>
            <div className='d-flex gap-4 p-3 bg-success mb-5'>
               {superHeroes?.map((superHeroCategory) => (
                     <Droppable
                        key={superHeroCategory.id}
                        id={superHeroCategory.id}
                        originalData={superHeroes}
                        setData={setSuperHeroes}
                        type='moveBetweenLists'
                        className='mb-5 p-3 bg-info'
                     >
                        {superHeroCategory?.items?.map((heroes, index: number) => (
                           <Draggable
                              droppableId={superHeroCategory.id}
                              key={heroes.id}
                              id={heroes.id}
                              index={index}
                              droppableType='moveBetweenLists'
                              className='bg-light p-2 mb-2'
                           >
                              {heroes.desc}
                           </Draggable>
                        ))}
                     </Droppable>
               ))}
            </div>

            <h2 className='mb-5'> Move droppables</h2>
            <Droppable
                  id='outerMostDroppable' // REQUIRED 
                  originalData={toysFoodItems}
                  setData={setToysFoodItems}
                  type='outerMostDroppable' // REQUIRED
                  className='mb-5 p-5 bg-danger d-flex gap-3 justify-content-between'
               >
                  {toysFoodItems?.map((toysFoodItem, index) => (
                     <Draggable
                        droppableId='outerMostDroppable' // REQUIRED
                        key={toysFoodItem.id}
                        id={`${toysFoodItem.id}droppable`} // REQUIRED So that the droppable and draggable below have different id(in their id's we can not add droppable because we are using there id's for comparison in re-order data function in context)
                        index={index}
                        droppableType='outerMostDroppable' // REQUIRED
                        className='p-5 mb-4 bg-warning'
                     >
                        <Droppable
                           key={`${toysFoodItem.id}droppable`}
                           id={toysFoodItem.id}
                           originalData={toysFoodItems}
                           setData={setToysFoodItems}
                           type='moveBtwLists'
                           className='p-4 bg-info'
                        >
                           {toysFoodItem?.items?.map((toysFood, index: number) => (
                              <Draggable
                                 droppableId={toysFoodItem.id} 
                                 key={toysFood.id}
                                 id={toysFood.id}
                                 index={index}
                                 droppableType='moveBtwLists'
                                 className='bg-light p-2 mb-2'
                              >
                                 {toysFood.desc}
                              </Draggable>
                           ))}
                        </Droppable>
                     </Draggable>
                  ))}
            </Droppable>

         </Container>
      </DragDropContextProvider>
   )
}

export default App;