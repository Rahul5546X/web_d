// This is the main app component, in this we wrap our whole app with DragDropContextProvider, and every Draggable is placed inside a Droppable.
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { DragDropContextProvider } from './context/DragDropContext';
import { toysList, foodItemsList, foodToysList as foodToyList } from './assets/data';
import Droppable from './components/Droppable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Draggable from './components/Draggable';

function App() {
	const [toyList, setToysList] = useState(toysList);
	const [foodItemList, setFoodItems] = useState(foodItemsList);
	const [foodToysList, setFoodToysList] = useState(foodToyList);

	return (
		<DragDropContextProvider>
			<Container>
				<Droppable droppableId='toysDroppable' originalData={toyList} setData={setToysList} className='mb-5 p-3 bg-warning'>
					{toyList.map((item, index) => (
						<Draggable key={item.id} draggableId={item.id} droppableId='toysDroppable' index={index} className='bg-light p-2 mb-2'>{item.desc}</Draggable>
					))}
				</Droppable>

				<Droppable droppableId='foodDroppable' originalData={foodItemList} setData={setFoodItems} className='mb-5 p-3 bg-warning'>
					{foodItemList.map((item, index) => (
						<Draggable key={item.id} draggableId={item.id} droppableId='foodDroppable' index={index} className='bg-light p-2 mb-2'>{item.desc}</Draggable>
					))}
				</Droppable>

				<h2 className='mb-3'>Across containers</h2>
				<div className='d-flex justify-content-between'>
					{foodToyList.map((listItem) => (
						<Droppable key={listItem.id} droppableId={listItem.id} originalData={foodToysList} setData={setFoodToysList} className='mb-5 p-3 bg-warning'>
							{listItem.items.map((item, index) => (
								<Draggable key={item.id} draggableId={item.id} droppableId={listItem.id} index={index} className='bg-light p-2 mb-2'>{item.desc}</Draggable>
							))}
						</Droppable>
					))}
				</div>
			</Container>
		</DragDropContextProvider>
	)
}

export default App;