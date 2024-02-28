### installing and using redux###
```
basically we'll use redux toolkit
npm install @reduxjs/toolkit
src/redux/store.js
                import { configureStore } from '@reduxjs/toolkit'
                import rootReducer from './reducers'
                const store = configureStore({ reducer: rootReducer })

in main.jsx
  import {store} from "./redux/store.js"
  import { Provider } from 'react-redux' // redux store ka access dega e puri app ko
    <Provider store={store}>
    <App />
    </Provider>


create a slice
create a folder named upon your state inside redux folder
    redux/counter/counterSlice.js
    copy paste the code
                import { createSlice } from '@reduxjs/toolkit'

                const initialState = {
                value: 0,
                }

                export const counterSlice = createSlice({
                name: 'counter',
                initialState,
                reducers: {
                    increment: (state) => {
                    // Redux Toolkit allows us to write "mutating" logic in reducers. It
                    // doesn't actually mutate the state because it uses the Immer library,
                    // which detects changes to a "draft state" and produces a brand new
                    // immutable state based off those changes
                    state.value += 1
                    },
                    decrement: (state) => {
                    state.value -= 1
                    },
                    incrementByAmount: (state, action) => {
                    state.value += action.payload
                    },
                },
                })

                // Action creators are generated for each case reducer function
                export const { increment, decrement, incrementByAmount } = counterSlice.actions

                export default counterSlice.reducer


update the store.js to
            import { configureStore } from '@reduxjs/toolkit'
            import counterReducer from './counter/counterSlice'
            export const store = configureStore({
                reducer: {
                counter: counterReducer,
                },
            })
now we can read the value of state from anywhere and can change the value by using the function provided in counterSlice.js we can also add our custom functions

to get the value and methods then import these in app.jsx
    import { useSelector, useDispatch } from 'react-redux'
    import { decrement, increment } from './counterSlice'
    const count = useSelector((state) => state.counter.value)


while using function in onclick
  const dispatch = useDispatch()
     <button onClick={()=>{
        dispatch(increment())
      }} >+</button>

if you wanna use it in  navbar then do this in navbar
    import { useSelector, useDispatch } from 'react-redux'
    const count = useSelector((state) => state.counter.value)
    and you are good to go

```

### redux and useContext ###

```
we can read a state from any component without using prop drilling

redux-store--> single source of truth where all the states are stored




 it's important to note that Redux and useContext have different use cases and trade-offs. Redux is typically used for larger applications with complex state management needs, while useContext is more lightweight and suitable for simpler scenarios or when you don't need the full capabilities of Redux. Additionally, Redux provides features like middleware, time-travel debugging, and a defined pattern for managing state changes, which may be overkill for smaller applications

 Certainly! Here are some of the main differences between Redux and the useContext hook:

Scope and Flexibility:

Redux: Provides a centralized global store for managing application state. All state changes are handled through actions and reducers, and components access the state via the connect higher-order component or hooks like useSelector and useDispatch.
useContext: Allows you to create and consume context within React components. While it can be used to manage global state, it's more flexible and can also be used to manage local state within a subtree of components.
Predictability and Strictness:

Redux: Enforces a strict pattern for state management, with actions describing state changes and reducers specifying how those changes are applied. This can lead to more predictable state transitions and easier debugging.
useContext: Provides more flexibility in how state is managed, which can lead to less predictability if not used carefully. It's up to the developer to define the structure and behavior of the context, which can vary from one implementation to another.
Complexity and Boilerplate:

Redux: Often involves more setup and boilerplate code, especially for larger applications. You need to define actions, action creators, reducers, and connect components to the Redux store.
useContext: Generally involves less boilerplate, especially for simpler use cases. You can create a context and consume it within components using the useContext hook with minimal setup.
Performance:

Redux: Optimized for performance, especially when dealing with large amounts of state or deeply nested component trees. Redux's immutable state updates and efficient subscription mechanism can help prevent unnecessary re-renders.
useContext: Performance can depend on how context providers are structured and how often context values change. In some cases, excessive re-renders may occur if context values are updated frequently.
Tooling and Ecosystem:

Redux: Comes with a rich ecosystem of tools and middleware for managing asynchronous actions, handling side effects, and integrating with developer tools like Redux DevTools.
useContext: While useContext itself is a part of React's core API, it doesn't come with as many built-in tools or middleware. Developers may need to rely on third-party libraries or build custom solutions for managing more complex state management scenarios.
```