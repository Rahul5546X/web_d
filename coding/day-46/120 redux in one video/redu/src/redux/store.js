import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
export const store = configureStore({
    reducer: { 
      counter: counterReducer,
    },
})

// reducer help us in changing the state it takes an intital state and helps us in changing it 