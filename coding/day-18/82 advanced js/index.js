async function sleep()
{
    return  new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

// let a = await sleep() // give error
// let b = await sleep()

// now if I wanna use this I'll have to declare a async function but if I do no want to do that we can use IIFE 


// immediately invoke fnction expression(no error)
// (async function main(){
//     let a = await sleep()
//     console.log(a)
//     let b = await sleep()
//     console.log(b)
// })()


// **********           Destructuring

(async function main(){
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)
//                              **********           Destructuring
    // let x,y = [1,5]
    // console.log(typeof(x,y)) // object
    // console.log(x,y) // it does not give 1 and 5
    // so to get that
    // let [x,y] = [1,5]
    // console.log(x,y) // it  give 1 and 5

})()


// always use three dots...
let [x,y,z] = [1,5,7]
console.log(x,y,z) // it also give 1 and 5
let [a,b,...rest] = [1,5,7,8,9,10]
console.log(x,y,rest)  // rest is just a variable

// Destructuring in objects
let obj = {
    e:1,
    f:2,
    g:3,
    h:4,
    i:5,
    j:6
}

// same working as in array
let{e,f,g,...rest1} = obj
console.log(e,f,g,rest1)










// ***************          spread syntax

function sum(a,b,c){
    return a+b+c;
}

let arr = [1,3,4]
// to sum all the elements of array
console.log(arr[0]+arr[1]+arr[2])
console.log(sum(arr[0],arr[1],arr[2]))

console.log(sum(...arr)) // e khol dega array ko 

// Special case/
const arr2 = [1,2,3]
const obj2 = {...arr2}
console.log(obj2); // index ke hisab se de dega numbering


const a1 = "the" 
const b1 = "no"
const c1 = {a1,b1}
console.log(c1); //{a1: 'the', b1: 'no'}









// *****************Hoisting

console.log(w)  // undefined in case of var , in case of let and const we will get error
var w = 6; // in this case declaration will get at the top of the block(just the declaration (var w)not it's value i.e var w = 6 so it'll show undefined)
// let w = 6;

// functions also supports hoisting if they are declared without using const

