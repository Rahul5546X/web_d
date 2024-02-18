// oops in js phle bhi pdi h cwh vali easy thi aagyi thi smjh

// parts of oop 
            // object literal
            // constructor functions
            // prototypes
            // classes
            // inhertitance
            // instances(new,this )

// four pillars
// Abstraction--- fetch( ) hiding details
// Encapsulation --> wrapping up data jo access krne dega programmer user vhi access kr  payega
// polymorphism-->  one function different forms
// inheritance-- basic

//object literal
let name = 'outside object'
const user={
    name:"xyz",
    value:123,
    place:"GOOD PLACE",


    getUSERdetails(){
        // console.log(`name is ${name} and value is {value} and place is very {place}`) // variables ese ni honge access this ka use krna pdega ahr without this krenge to jo bahr vala variable hoga vo hoga access
        console.log(`name is ${this.name} and value is ${this.value} and place is very ${this.place}`) // this ka use krke current context ke variables honge access
    }
}
console.log(user.name)
user.getUSERdetails()

//cac

function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/