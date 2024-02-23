### why should we use react ###
```
 basically in simple language react is a large library which we can use
Suppose we have three boxes and we want there content to be changed after some fixed amount of times so we have to use html, js both but with react we can just write jsx , we can use variables, we do not have to use dom manually

react uses virtual dom efficiently 
debugging and maintenance is easy we can test components independently


we can divide our code in components and use them again and again
we can use props(variables in a component) when we are using the components we can changes some variables in components

the variable which can be changed and can be used in dom is called state
we can use state which means if we change a variable once it'll be changed at every place across the whole page
```

```
in react we write jsx
```

### exporting components in jsx
```
// In JavaScript and JSX, component names must start with a capital letter in order to be recognized as components. This is a convention in React and many other JavaScript libraries to distinguish between regular HTML elements and custom components.
```


### installing react ###
Step 1. In terminal run this command
```
npx create-react-app with-react

there will be a folder made dynamically named with-react("it'll we a npm project default)
```
step 2. open the folder with-react and check the package.json
step 3. run the following script
```
npm start
a react app will be started automatically at local host 3000
```
step 4. Folder Structure
``` 
    Node modules-- already know(all the packages we installed)
    public-- all the files which are directly accessible(Static files-- fav.icon)
        there is a file named index.html in public, the whole react app will be inserted in that div with id root 
    src-- App.js:- in this we write our main app
                   special syntax is used called JSX
                   instead of class we use classname

```