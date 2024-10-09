import { OriginalData } from "../interfacesAndTypes/typesAndInterfaces"

export const toysList: OriginalData = [
	{
		id:'toyOne',
		desc:'This is Batman',
	},
	{
		id:'toyTwo',
		desc:'This is Superman'
	},
	{
		id:'toyThree',
		desc:'This is Iron-man'
	},
	{
		id:'toyFour',
		desc:'This is Spider-man'
	}
] 

export const foodItemsList: OriginalData = [
	{
		id:'foodOne',
		desc:'This is burger'
	},
	{
		id:'foodTwo',
		desc:'This is pizza'
	},
	{
		id:'foodThree',
		desc:'This is food'
	},
	{
		id:'foodFour',
		desc:'Food item 4'
	}
] 

export const foodToysList = [
	{
	  id:'foodList',
	  items: [
		{ id: 'foodListOne', desc: 'This is burger' },
		{ id: 'foodListTwo', desc: 'This is pizza' },
		{ id: 'foodListThree', desc: 'This is food' },
		{ id: 'foodListFour', desc: 'Food item 4' },
	  ],
	},
	{
	  id:'toysList',
	  items:[
		{ id: 'toyListOne', desc: 'This is Batman' },
		{ id: 'toyListTwo', desc: 'This is Superman' },
		{ id: 'toyListThree', desc: 'This is Iron-man' },
		{ id: 'toyListFour', desc: 'This is Spider-man' },
	  ],
	},
  ];