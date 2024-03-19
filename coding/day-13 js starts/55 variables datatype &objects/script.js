console.log( "name is rahul guys")
console.log("In this video we will learn about variables in javascript")

// syntax to making variables
// it is dynamicallly typed language
// to know type of variables we can use the typeof() operator
// varibles name can only start with letter,underscore,$ . NAME CAN NOT START WITH NUMBER
// It is case-sensitive
var a = 5;
var b = 6;
// c = 5;// valid but not recommended
// let 2a = 7;  //not allowed

let d;// undefined 
// always use let while declaring the variables
console.log(typeof(a),typeof(b))
console.log(a+b)
console.table([a,b,d])

// check notes for difference b/w var and let
// let and const are block scoped  while var is globally scoped(both var and let can be changed)
// let can be updated but not be re-declared
// var can be updated and be re-declared in it's own block.
// const can not be changed
 const a1 =6;
//  a1 = a1+4;  // not allowed


// type of null is always object and it is a primitive data type (qnki ek bar bahut purane developer ne glti se likh dia tha specification mn ki esa hoga aur ab uspr bahut sara purana code rely kr deta h to isliye usko change ni kr skte hn)

// object-- combination of key value pair

let o={
    "name": "Rahul",   // e jo name h isko hm bina ""  iske bhi likh skte hn qnki ismn space nhi h
    "job role":"web developer"
}
o.salary = "100cr";
console.log(o)
 
// Primitive DataTypes-- called by value and changes are made in the copy ---------stack memory(copy)

// number(int,flloat sb isimn aata h)
// bigint  agr number bahut bda ho
// string single double quote both
// boolean 
// null  let temp = null standalone value  it means temp khali h na ki undefined
// undefined  type of undefined is  undefined
// symbol (react) used for uniqueness-->kisi value ko unqiue bnane ke lie

// non_primitive -- called by Reference(return type function(object function)) -------heap memory(reference)
// object
// array
// functions
// 

let v1 = Symbol('123')
let v2= Symbol("123")

console.log(v1)
console.log(v2)
console.log(v1==v2)