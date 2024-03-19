// learn about objects in  javascript

// gonna master the concept of objects
// ways to declare objects
// 1 . sigleton(from constructor) 
// Object.create

// 2. like literals(ismn singleton ni bnta h)


// DEclaring object literals

// const Jsuser = {}  // bn gya object e empty h 
// using symbol as a key
const mySymbol = Symbol("key1")

const Jsuser = {name:"Rahul",
                "FULL NAME": "Rahul Thakur",
                // mySymbol:"my key 1", // it is used like a string
                [mySymbol]:"my key 1", // it'll used like a symbol print the whole object to check the difference between these two
                // jb symbol hoga to sbse last mn print hoga e
                number: 98983984,
                location: "india",
                isLoggedIn: false
            } // key value pair ,keyy is treated as string, iske andr arrays de skte hn ,kuch bhi de skte hn


// accessing objects right way
console.log(Jsuser.name); // work but not a good way, with this method we can not access the FULL NAME


// console.log(Jsuser.FULL NAME);KHUD vs code ise niche vale trike mn change kr dega qnki esee ni ho payega e

console.log(Jsuser["name"]); // access krte time string ki trh krna pdega

console.log(Jsuser["FULL NAME"]); // we can easily access , so it is the best way

// console.log(Jsuser.mySymbol); // work, but the datatype will be string
// console.log(typeof Jsuser.mySymbol); // string

// if we want to use it as a symbol
console.log(Jsuser[mySymbol]); 
console.log(typeof Jsuser[mySymbol]); 


// changing the value
Jsuser.location = "United state"




// using a function inside a object
Jsuser.greeting = function()
{
    console.log("Hello Js user");
}

Jsuser.greeting2 = function()
{
    console.log(`Hello Js user  ${this.name}` ) ; // jo name iske scope mn dia h vhi le lega e
}

console.log(Jsuser.greeting); // it'll give 
// Function {anonymous}
console.log(Jsuser.greeting());  // work
console.log(Jsuser.greeting2());  // work


// if we want something to not get changes
Object.freeze(Jsuser) // pure object ko kr dega
// Object.freeze(Jsuser.name)  // we can freeze a specific part of the object   not working on specific part

Jsuser.name = "ishika" // will not be changed
console.log(Jsuser.name); // rahul
Jsuser.location = "india" // it can not be changed
console.log(Jsuser.location);
console.log(Jsuser);


/*
1. delcaring object 2 ways(singleton and literals)
2. adding values in objects in form of key and pair
3. accessing values from objects(changing the value of objects)
4. adding and accesssing symbol
5. adding and accessing function 
6. freezing objects
*/




