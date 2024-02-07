let a = Number(prompt("Add the value of A"))
let b = Number(prompt("Add the value of B"))
console.log(a,b);

let c = Math.random(1,100);
console.log(c);

let d = a+b;
let e = a-b;
if(c>0.1)
{
    console.log("Addition calclation : " + d)
    console.log("Subtraction calclation : " + e)
    console.log("Multiplication calclation : " + a*b)
    console.log("Division calclation : " + a/b)
}
else{
    console.log("Addition calclation : " + a-b)
    console.log("Subtraction calclation : " + a*b)
    console.log("Multiplication calclation : " + a/b)
    console.log("Division calclation : " + a+b)
}