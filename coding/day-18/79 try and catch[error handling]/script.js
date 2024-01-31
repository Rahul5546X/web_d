console.log("Script is connected..")

let a = prompt("Enter 1st number")
let b = prompt("Enter 2nd number")

// we know a and b will be string so to convert them into numbers

// throwing custom error a and b should not be Nan(not a number)
if(isNaN(a)  || isNaN(b))
{
    throw SyntaxError
    // throw new Error("wrong input type")
}
else{
        let sum = parseInt(a)+ parseInt(b);
        console.log("the sum is ", sum);
    }
    
    
                            // handling errors
    









            

function main(){
    let sum = parseInt(a)+ parseInt(b);
    let x = 1;
    try {
        console.log("the product is ", sum*x) //now x is not defined so it'll throw an error that's why we will put it inside the try block
        return true
        
    } catch (error) {
        // it'll catch the error thrown by the try block
        console.log(`error is ${error} 
        \nerror name is ${error.name} 
        \nerror message is ${error.message} 
        \nerror stack is ${error.stack}`)
        // we can also get error.name error.message error.stack
        return false
    }
    // as we know function stop working when the return is encountered but in this case finally will work always(it does not matter try is executed or catch is executed finally will work in both cases)
    finally{
        console.log("finally is working")
    }
}
let d = main()



// try and catch is not able to catch the error of asynchronous functions

// try {
//     setTimeout(() => {
//         throw new Error("Error inside setTimeout callback");
//     }, timeout);
// } catch (error) {
//     console.log(error)
// }


// it'll not work, the error will not be caught because try and  catch is synchronous in nature jbkt timeout background mn execute hoga tbtk engine try catch se bahr chla jayega
// it does not matter that if there is a async and await function in set timeout

