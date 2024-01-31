console.log("script is initializing...");



// prototype
let obj = {
    a: 1,
    b: "JavaScript"
}

console.log(obj);  // prototype are not it's personal properties or method they are additional functions
// (prototype is also an object which has many functions)

console.log(obj.a);
console.log(obj.constructor); // from prototype

let obj2 = {
    c: 2,
    d: "Html ,css "
}

console.log(obj2)
obj2.__proto__ = obj  // object inheritance
console.log(obj2.a);// there is no a in obj2 but it'll still work because a is defined in the prototype of obj2 which is obj



//  **********************classes and objects*************************
class Animal {
    constructor(name) {
        this.name = name
        console.log("Name of the animal is ", this.name)
    }
    eats() {
        console.log("Animal eats food");
    }
    jumps() {
        console.log("Animal jumps");
    }
    // static method --> will be accessed with class instead of object.It'll also be inherited
    static sjungle() {
        console.log("Animals are in jungle")
    }
}
class Lion extends Animal {
    // over riding constructor
    constructor(name) {
        super(name)
        console.log(`${this.name} is the king of the jugle`)
    }

    // method overriding
    eats() {
        super.eats() // it'll call the parent eat method
        // super.fly() // there is no fly function in the parent class so it'll give an error
        console.log("Lion eats food")
    }
    roar() {
        console.log("Lion roars")
    }
}

// class doraemon extends Animal , Lion{
//  classes can only inherit single class
// }
let rabbit = new Animal("Rabbit")
// rabbit.eats()
// rabbit.jumps()
// rabbit.sjungle() //script.js:50 Uncaught TypeError: rabbit.sjungle is not a function
Animal.sjungle()  // static method
let b = new Lion("simba")
b.eats()
Lion.sjungle()





//*****************************getter and setters
class User {
    constructor(name) {
        this.name = name
    }

    get name() {
        return this._name
    }

    // reason to use the _
    // in  the code you provided, the use of the underscore (_) is a common convention in JavaScript to indicate that a property is intended to be private. In this case, this._name is used as a private property within the User class.

    // When you define a getter and setter for a property, it's common to use a different name for the actual property to avoid conflicts. In this example, the public property is accessed via user.name, but the actual property in the class is this._name.

    // If you don't use the underscore and directly use this.name in both the getter and setter, you'll run into a naming conflict.

    set name(value) {
        if (value.length < 4) {
            console.log("The name is too short ")
            return
        }
        this._name = value
    }
}

let user = new User("captain")

console.log(user.name) // captain
user.name = " america"  // setter will run
console.log(user.name) // captain









