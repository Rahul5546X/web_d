
// arrays in javascript(they are resizble ,can have different type of elements)(in array we have shallow copy--reference)

// in web developments when we'll have multiple components of same data
// will be used in react


let numbers = [1,2,7,9]
const heroes = ["ironman","superman"]
const heroes2 = new Array(1,4,6,7)
// type of array is object(so it has two prototypes)




// arrays are mutables they can be changed
// in javascipt, arrays are object so typeof operator will return object
console.log(numbers[3]);
console.log(numbers.length)
numbers[0] = 0
// now new array will be let numbers = [0,2,7,9]
console.log(numbers[0]);
console.log(typeof(numbers))
console.log(numbers)



// methods

console.log(numbers.includes(2))
console.log(numbers.toString())
console.log(numbers.join(" and "))
console.log(numbers)
// pop -last element is popped and returned

// shift- remove first element and returns it

// push - add new element at the end of the array, return the new array length

// unshift- add element to start of array and return the length of the new array

// delete- with an index does not return anything(memory will be remain located(lenght will be same after and before deleting))

// sort 
// baki notes check kr lena




// it'll not change the original array
// concat - used to join arrays to the given array
let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]


// a1.push(a2)
// console.log(a1);// array ke andr array aa jayega na ki e merge ho jayenge


// console.log(a1.concat(a2,a3))// merge ho jayenge
// it returns a new array

// console.log(a1.concat(a3))

console.log("Spread");
// using spread
const a4 = [...a1,...a2,...a3]
console.log(a4);
// reverse

// .flat
const a5 = Array.from("Rahul") // e is string(ya jo bhi hoga) se array bna dega
console.log(a5); 


// object ke case mn empty array dega qnki btana pdega ki keys ka array chaiye ya values ka

const a6 = Array.from({name:"rahul",
number:"9867"}) // Array.of

console.log(a6.keys());




//slice does not include the last range and does not manipulate the original array
// splice works same as slice but it includes the last range and manipulate the original array(jo chizn splice kri hongi vo bahr hi ho jayengi original array se)

