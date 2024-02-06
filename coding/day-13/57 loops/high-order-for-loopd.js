//  chai aur code 

// ["", "", "",""] //string inside array
// [{}, {}, {},{}] // myobj2 inside array
// array specific loop and myobj2 specific loops



// for-each
// array.forEach(element => {

// });




// for-in (works on object give the keys of the objects and index(keys) of the array,does not work on map)
// for (const key in myobj2) { //(work on myobj2)
//     if (myobj2.hasOwnProperty.call(myobj2, key)) {
//         const element = myobj2[key];

//     }
// }




// for-of //(does not work on myobj2)((work on array and give the values of the array)(work on maps))
// for (const iterator of myobj2) { // myobj2 does not mean the myobj2({}) inside java(myobj2s are not iterable, the use for in loop). it means just a simple myobj2(koi chiz)
// }



// *****************************************************************for of (arr, string, maps)
let arr = [1, 2, 3, 4, 7, 6]
for (const val of arr) {   //no need to put conditions , increment
    // console.log(val);
}


const greetings = "hello Rahul"
for (const greet of greetings) {
    if (greet == " ") continue; // skip the space

    // console.log(greet);  // hr ek character print ho jayega
}


//Maps
const map = new Map() //map is an myobj2 . it holds key valye pair, it remember the order of keys as they are inserted while myobj2 does not hold the order
// it has no duplicate values , it is also not iterable so for-in does not work on it 
map.set("state", "himachal")
map.set("country", "india")
map.set("pin-code", "175049")
map.set("state", "uttrakhand") // does not have duplicate values so 2nd entry will overwrite the 1st one


// console.log(map);
// console.log(map.values());
// console.log(map.get("state"));


// for (const [key,values] of map) {  // sirf key lgenge to sara map hi print ho jayega . it is called destructuring
//     console.log(key,'-->',values);
// }


// const myobj = {
//     "state": "himachal",
//     "country": "india",
//     pin_code: "175049",
//     "state": "uttrakhand"
// }

// console.log(myobj);
// console.log(typeof myobj);
// console.log(myobj.state);
// console.log(myobj.pin_code);

// for (const val of myobj) {    //myobj is not iterable we have to convert it to array
//     console.log(val);
// }





// *************************************************forin***********************************(obj)

const myobj2 = {
    "state": "himachal",
    "country": "india",
    pin_code: "175049",
    "state": "himachal",
    state:"india"  // overwrite the other values
}

for (const key in myobj2) {
    // console.log(key)// we'll get all the keys
    // console.log(myobj2[key]);  // values of all the keys
    // console.log(`${key} is this and values is this ${myobj2[key]}`);
}

let arr2 = [2,4,5,6,7]

for (const key in arr2) {
        // console.log(key);  // we get only the index 
        // console.log(arr2[key]);  // we get the values corresponding to all the syntax 
}

// **************************************for-each**************************************(added in direct properties of array)it is higher order

// let arr3 = [2,3,4,5,6,5]
// arr3.forEach(element => {
//     console.log(element);
// });

let arr4 = [2,3,4,5,6,5]
arr4.forEach(printme);  // fo not call the function here just give a reference

function printme(item){
    // console.log(item);
}



const coding = ['ruby', 'python','javascript','cpp','c','swift']
coding.forEach((element,index,arr) => {  // e sb parameter hote hn iskee pass(callback function)
    // console.log(element,index,arr);
});

// array of object se values nikalna
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

shoppingcart.forEach((item)=>
{
    console.log(item);
    console.log(item.price);
    console.log(item.itemname);
})