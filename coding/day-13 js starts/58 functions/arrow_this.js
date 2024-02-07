// This and arrow function cac



// this-- tells about the current context(it is a global object)
const user= {
    username:"Rahul",
    age:20,
    price:999,
    welcome:function () {
        console.log(`Hey ${this.username} Welcome to the website`);// if we do not user this we can not access the username
        console.log(this);
    }  
}

// user.welcome()
// console.log(user.username);
// user.username="aashish"
// user.welcome()
// console.log(user.age);
// console.log(this);  // in node it'll be empty but in browser window will be returned 



//this lexically and globally scoped
// function tea(){
//     let name = "Taja Chai"
//     console.log(this);  // inside function there are many values
//     // console.log(this.name);  // we can not access it like this way, it only work in object(undefined)
// }
// tea()


// const tea = function(){
//         let name = "Taja Chai"
//         console.log(this);  // inside function there are many values
//         console.log(this.name);  // we can not access it like this way, it only work in object(undefined) 
//     }
// tea()



// In the context of a regular function (not an arrow function), the value of this depends on how the function is called. If the function is not part of an object or not called with a specific context, this typically refers to the global object (e.g., window in a browser).

// In your example, since the function tea is not a method of an object and is just called directly, this refers to the global object (usually window in a browser environment).


// const tea = ()=>{
//     let name = "Taja Chai"
//     console.log(this);  // empty paranthesis ,they do not have their own this.  so isliye ni kr paunga acess
//     console.log(this.name);  //stil not working (undefined)
// }
// tea()

// +++++++++++++++++++++++++++++++++++++++++++++++++  arrow function++++++++++++++++++++++++

// 1.holding inside a variable--explicit return

// const addTwo = (num1, num2)=>{
//     return num1+num2
// }
// console.log(addTwo(2,3));


// 2. Implicit return
// const addTwo = (num1, num2)=> num1+num2   // way 1  curly braces use kroge to return likhna hi pdega
const addTwo = (num1, num2)=> (num1+num2)   // way 2 
// const addTwo = (num1, num2)=> ({username:"rahul"})   // way 2 suppose if we are returning a object so it is good to  use paranthesis
console.log(addTwo(2,3));






// difference between arrow and normal function using this
// Normal function
function regularFunction() {  //In normal functions, the this keyword is dynamically scoped. Its value is determined by how the function is called.
    this.value = 1;
  
    setTimeout(function () {
      this.value++;
      console.log("Inside regularFunction:", this.value);
    }, 1000);
  }

  // Arrow function
  function arrowFunction() {  //In arrow functions, the this keyword is lexically scoped. It retains the value of this from its enclosing scope.
    this.value = 1;
  
    setTimeout(() => {
      this.value++;
      console.log("Inside arrowFunction:", this.value);
    }, 1000);
  }
  
  regularFunction(); // Inside regularFunction: NaN (this.value is not accessible)
  arrowFunction();   // Inside arrowFunction: 2 (this.value is accessible)
  