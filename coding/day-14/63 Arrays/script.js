// arrays in javascript

// in web developments when we'll have multiple components of same data
// will be used in react

let numbers = [1,2,7,9]
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

console.log(numbers.toString())
console.log(numbers.join(" and "))
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
console.log(a1.concat(a2,a3))
// console.log(a1.concat(a3))

// reverse

