// to make a new array using original array with minimum lines of code

let arr = [1,13,5,7,11]
// simple way of making a new array using an existing array
// let newarr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)    // it'll push the square of elements
// }
// console.log(newarr)

// Maps 
// sbse asan trika  (used mostly)
let newarr1 = arr.map( (e  , index , array) => {  // e is element
    return e**2;
})
console.log(newarr1)

// filters -- as it's name suggests  (used mostly)
const greaterThanSeven = (e)=> {
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))


// reduce method

let arr2 = [1,2,3,4,5,6]
const red =(a,b) =>{
    return a*b
}
console.log(arr2.reduce(red))  

// array.from will we used in html