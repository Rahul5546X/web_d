function welcome(name) { // name is parameter
    console.log("hey " +name+ " you are welcomed")
    console.log("hey " +name+ " you are good guy")
    console.log("hey " +name+ " you are efficieint")
}
welcome("try_to_learn"); // ("try-to-learn") is arguement

function sum(a =1 ,b = 2) {
    console.log(a+b);
    // return a+b; 
}

// console.log("the sum of 3 and 5 is "+ sum(3,5))
sum // this is reference
sum(3,5); // this is execution


// sum(); //default value/parameter will be used ,if there is no default value then result will be undefined

""


// arrow function

const func1 = (x)=>{
    console.log("I'm an arrow function" ,x)
}

func1(34)
func1(14)
func1(24)


// functions with objects and arrays--cac
// shopping cart bnaoge to user usmn add krta hi rhega e fix ni hoga ki kitni chizn add krni h user ko
function calculateCartPrice(val1,val2,...num1)  //rest(operator similar as spread) jitne jada arguements honge sb return ho jayenge
{
    return [val1,val2,num1] //we will get an array coz of num1(but herer to return multiple values we are using array so we will get an array inside an another array)
}

console.log(calculateCartPrice(200,400,500,600,700)); // hmne function mn ek hi parameter dia h to hm use krenge rest operator



function gamer(user1)
{
    // return user1 //return whole object
    return user1.laptop  // return the value of key(laptop)
}

// similarly we can pass arrays

const user = {
    username:"coder",
    laptop:"asus rog strix",
    ram:"16gb"
}
console.log(gamer(user));


// another way
// console.log(gamer({
//     username:"coder",
//     laptop:"asus rog strix",
//     ram:"16gb"
// }));
 


                // hoisting bgera ka cocept h e
// function addone(num)
// {
//     return num+1
// }
// console.log(addone(5));


// const addtwo = function(num) // variable can hold
// {
//     return num+2

// }
// console.log(addtwo(5));


console.log(addone(5));  // will work  hoisting
function addone(num)
{
    return num+1
}


console.log(addtwo(5)); // will not work variable h qnki 
const addtwo = function(num) // variable can hold
{
    return num+2
}

