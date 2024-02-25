

// var x =20
// function foo(){
//     console.log(x);
//     var x= 10
// }
// foo()
// console.log(x);


// The variable x is declared and assigned the value 20 in the global scope.
// The function foo is defined.
// Inside the function foo, a new variable x is declared using var keyword and assigned the value 10. This declaration is hoisted to the top of the function scope.
// When console.log(x) is executed inside the function foo, it prints undefined because the local variable x is hoisted but not initialized yet, so its value is undefined at that point.
// When console.log(x) is executed outside the function foo, it prints 20. This is because the variable x in the global scope is still accessible and retains its original value of 20. The local variable x inside the function foo does not affect the value of the global x because they are separate variables due to function scope.



// var x =20
// function foo(){
//     var x= 10
//     console.log(x);
// }
// foo()
// console.log(x);

// var x =20
// function foo(){
//     console.log(x);
//     x= 10
// }
// foo()
// console.log(x);

// var x;
// function foo(){
//     console.log(x);
//     x= 10
// }
// foo()
// console.log(x);


// question 2
const user1 = {
    name: 'john',
    age: 25,
    address: {
        city: "mumbai",
        state: "Maharastra"
    }
}
const user2 = user1  // reference jata h object ka to yad rkhna user 1 aur 2 dono equal ho jayenge
user2.name = "ramesh"
user2.address.city = "pune"

console.log(user1 == user2); // true inko equal kr dia h upr so reference same h

// console.log(user2);
// console.log(user1);


// question 3
[1,2] == [1,2] // false type is object and reference is compared not value

"ab" == "ab" // true type is string so values are compared not refernce
