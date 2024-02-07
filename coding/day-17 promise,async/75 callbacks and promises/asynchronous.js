console.log("main script intializing...")

// asynchronous nature of javascript

// things does not execute in the manner we write them in our code
console.log("script 1 intializing...")
console.log("script 2 intializing...")
console.log("script 3 intializing...")



let a = setTimeout(() => {  // it will be executed at last(The end ke bad hoga e execute) because it is asynchronous in nature
    console.log("Set timeout function script 4 intializing...")
}, 2000);
let b = setTimeout(() => {  // ab jb asynchronous ki bari ayegi tb e jis order mn honge vaise hi execute ho jayenge aur inke time delay bhi matter krega
    // agr same time hoga to jo phle hoga vo run hoga ese jiska time delay km hoga vo phle run ho jayega
    console.log("Set timeout function script 5 intializing...")
}, 1000);

console.log("script  6 intializing...")
console.log("The end")



