function welcome(name) {
    console.log("hey " +name+ " you are welcomed")
    console.log("hey " +name+ " you are good guy")
    console.log("hey " +name+ " you are efficieint")
}
welcome("try_to_learn");

function sum(a =1 ,b = 2) {
    console.log(a+b);
    // return a+b; 
}

// console.log("the sum of 3 and 5 is "+ sum(3,5))
sum(3,5);
// sum(); //default value/parameter will be used

""
// arrow function

const func1 = (x)=>{
    console.log("I'm an arrow function" ,x)
}

func1(34)
func1(14)
func1(24)