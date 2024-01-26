console.log( "name is rahul guys")
console.log("In this video we will learn about variables in javascript")

// syntax to making variables
// it is dynamicallly typed language
// to know type of variables we can use the typeof() operator
// varibles name can only start with letter,underscore,$ . NAME CAN NOT START WITH NUMBER
// It is case-sensitive
var a = 5;
var b = 6;
// let 2a = 7;  //not allowed

// always use let while declaring the variables
console.log(typeof(a),typeof(b))
console.log(a+b)

// check notes for difference b/w var and let
// let and const are block scoped  while var is globally scoped(both var and let can be changed)
// let can be updated but not be re-declared
// var can be updated and be re-declared in it's own block.
// const can not be changed
 const a1 =6;
//  a1 = a1+4;  // not allowed



// type of null is always object and it is a primitive data type (qnki ek bar bahut purane developer ne glti se likh dia tha specification mn ki esa hoga aur ab uspr bahut sara purana code rely kr deta h to isliye usko change ni kr skte hn)

// object-- combination of key vaulue pair

let o={
    "name": "Rahul",   // e jo name h isko hm bina ""  iske bhi likh skte hn qnki ismn space nhi h
    "job role":"web developer"
}
o.salary = "100cr";
console.log(o)

