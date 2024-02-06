// to make a new array using original array with minimum lines of code

let arr = [1, 13, 5, 7, 11]
// simple way of making a new array using an existing array
// let newarr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)    // it'll push the square of elements
// }
// console.log(newarr)








// Maps (we can chain map,filters)
// sbse asan trika  (used mostly)
let newarr1 = arr.map((e, index, array) => {  // e is element
    return e ** 2;
})
// console.log(newarr1)



// filters -- as it's name suggests  (used mostly)
const greaterThanSeven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}
// console.log(arr.filter(greaterThanSeven))



// reduce method
let arr2 = [1, 2, 3, 4, 5, 6]
const red = (a, b) => {
    return a * b
}
// console.log(arr2.reduce(red))  

// reduce cac
const mynums1 = [1, 2, 3]
const mytotal = mynums1.reduce((acc, currVal) => {      // acc= accumualator
    console.log(`acc ${acc} currval ${currVal}`);
    return acc + currVal
}, 0)   // 0 is intital value (than after 1st time initial value will be acc+currVal)
// console.log("total",mytotal);


// Yes, exactly! If you use 0 as the initial value or omit the initial value altogether (so it defaults to the first element of the array), the final result will be the same, given the same array of numbers.

// In both cases, the reduce() function iterates over all elements in the array, accumulating their values into the accumulator. It's just that the starting point of the accumulator differs depending on whether you provide an initial value or not.

// So, if you're summing up an array of numbers and you want to use reduce(), you can choose to use 0 as the initial value or omit it entirely, and the final result will be the same.


const shoppingcart = [
    {
        itemname: "js course",
        price: 1200
    },
    {
        itemname: "data-scientist",
        price: 1400
    },
    {
        itemname: "sigmaWebD",
        price: 1600
    },
    {
        itemname: "python",
        price: 1800
    },
    {
        itemname: "C/c++",
        price: 1600
    }
]

// now if i have to add all the prices(chaining of map and reduce)

// const cart = shoppingcart.map((item) => {
//                 return item.price //+10  // this 10 will be added to every item
//             }) .reduce((acc,item)=>{
//                 return acc+item
//             },0) // e sirf first iteration mnn hoga add na ki hr bar (agr hr bar krna h to map mn kr skte ho)
// console.log(cart);

// another simple method
const cart2 = shoppingcart.reduce((acc,item)=>  acc+item.price ,0)
console.log(cart2);


// array.from will we used in html
//*************************************cac********************************************************************* *
const coding = ['ruby', 'python', 'javascript', 'cpp', 'c', 'swift']
coding.forEach((element, index, arr) => {
    // console.log(element, index, arr);
});

// suppose if we want to store this in varialble

// const values = coding.forEach((element, index, arr) => {
//             // console.log(element,index,arr);
//             // return item // it does not return anything 

//             });
// console.log(values);  // it'll have undefined coz nothing is returned if we want to return something we must do it manually


//filter
// const mynums = [1,4,6,8,10]
// const nums =  mynums.filter((num)=> num>4)  // it is returning all the values on which condition in true4
// console.log(nums);


// way2
const mynums = [1, 4, 6, 8, 10]
const nums = mynums.filter((num) => {  // agr array mn krna ho to if lgake nye array mn push kr do
    return num > 4  // scope start ho gya h to ab return likhna pdega agr scope ni hoga to khud return ho jayega
})
// console.log(nums);


