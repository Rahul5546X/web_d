// let input = Number(prompt("Enter the number you want factorial off"))
let input = parseFloat(prompt("Enter the number you want factorial off"))
console.log(input)
// console.log(typeof(input))

let arr = []
for (let value = 1; value <= input; value++) {
    arr.push(value);
}
console.log(arr);

const red =(a,b) =>{
    return a*b
}
console.log(` The factorial of ${input} is = ${arr.reduce(red)}`)  