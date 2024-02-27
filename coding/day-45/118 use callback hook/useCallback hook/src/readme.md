### useCallback###

```
jaise useMemo variable ko memoize krta h e function ko hi memoize kr deta h

Navbar mn memo isliye kia h use taki vo firse render na ho jb pura component re render ho

navbar sirf tbhi hogi re render jb count change hoga(dependecy array mn pass kia hua h)
```

```
difference between useEffect useMemo and useCallback

ChatGPT
useEffect, useMemo, and useCallback are all React hooks used for different purposes. Here's a breakdown of their differences:

Purpose:

useEffect: Used for handling side effects in your components. Side effects may include data fetching, subscriptions, or manually changing the DOM.

useMemo: Used for memoizing expensive computations so that they are only re-executed when their dependencies change.

useCallback: Used for memoizing functions so that they are only re-created when their dependencies change. This is particularly useful when passing callbacks to child components to prevent unnecessary re-renders.

Execution:

useEffect: The callback function passed to useEffect is executed after every render, including the first render and subsequent re-renders.

useMemo: The provided function is only executed during the initial render, and on subsequent renders, it returns the memoized value unless any of its dependencies change.

useCallback: The provided callback function is memoized and will only be re-created if any of its dependencies change.

Dependencies:

useEffect: Accepts a dependency array as the second argument, which specifies the values that, when changed, will trigger the execution of the effect. If the dependency array is empty, the effect runs only once after the initial render.

useMemo: Accepts a dependency array as the second argument. The memoized value will be recomputed whenever any of the dependencies change. If the dependency array is empty, the memoized value will be computed only once during the initial render.

useCallback: Accepts a dependency array as the second argument. The memoized callback function will be re-created whenever any of the dependencies change. If the dependency array is empty, the callback function will be memoized after the initial render.

Return Value:

useEffect: Does not return any value. It's typically used for performing cleanup or triggering actions after render.

useMemo: Returns a memoized value. This value will be recomputed only if any of the dependencies change; otherwise, the cached value will be returned.

useCallback: Returns a memoized callback function. This function will be re-created only if any of the dependencies change; otherwise, the cached function will be returned.

Use Cases:

useEffect: Suitable for scenarios where you need to perform imperative actions after a component render, such as fetching data from an API, subscribing to events, or manipulating the DOM.

useMemo: Useful when you have a costly computation inside your component that depends on certain props or state values, and you want to avoid recomputing it unnecessarily on every render.

useCallback: Useful when you have a function that is passed as a prop to child components and you want to prevent unnecessary re-renders by ensuring that the function reference remains stable unless its dependencies change.

In summary, useEffect, useMemo, and useCallback are all used to optimize performance and manage side effects in React components, but they serve different purposes and are used in different scenarios.
```