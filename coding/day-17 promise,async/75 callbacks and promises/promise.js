// what are promises--> it is an object which represent a eventual completion or failure of an asynchronous opration and it's resulting value.
//jo task dia h vo abhi ke abhi process nhi hoga (vo queue mn lg jayega pr execute bad mn hoga to agr vo complete hua ya nhi ye hmn  promise btata h(isliye chahe async await lgao ya promises lga lo) )


// three states of promises
// pending 
// fulfiilled
// rejected

// in most of staes we'll just consume the promises(but we also delcare or make promises some time)
console.log("This is Promise.........");


// way 1 --> simple way to declare promises(without reject) Storing promise in a variable
let prom1 = new Promise(function(resolve,reject) {
    // do an async task
    setTimeout(() => {
        console.log("Async task is complete")
        resolve()
    }, 2000);
    
    // ab e execute ho jayega to resolve bhejna pdega taki pta lg jaye ki e chl chuka h
})
prom1.then(function(){ //consuming the promises ,it connects with resolve
    console.log("Promise 1 is consumed");
})


// way 2 (one line way to declare promises)
new Promise(function (resolve,reject) {
    setTimeout(() => {
        console.log("Async task 2 is completed");
        resolve()
    }, 2000);
}).then(function(){
    console.log("Promise 2 is completed")
})

// way 3(Promise with both resolve and reject)
let prom3 = new Promise(function(resolve,reject){
    // let error = true // Catch is used
    let error = false // catch will not be used
        setTimeout(() => {

            console.log("Async task 3 is completed");
            if(!error){
                resolve("sended through resolve")
            }
            else{
                reject("We have an error in Promise 3")
            }
        }, 2000);

})
prom3
.then(function(val){
    console.log("Promise 3 is consumed")
    console.log(val);
})
.catch(function(err){
    console.log(err);
})


// way 4 passing data in resolve
let prom4 = new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("Async task 4 is completed");
            resolve({"username":"anamika", "email":"xyz@gmail.com"})
        }, 2000);
})
prom4
.then(function(val){
    console.log("Promise 4 is consumed")
    console.log(val);
    return val.username  //e niche vale then mn jayega
    // if you wanna take 1st value then do the following
})
.then(function(u_name){ // chain of then and catch
    console.log(u_name)
})
.catch(function(val)
{
    console.log(val);
})


// way 5 using finally -- error aaye ya na aaye it doesn't matter finally will execute in every situation
let prom5 = new Promise(function(resolve,reject){
    // let error = true // Catch is used
    let error = false // catch will not be used
        setTimeout(() => {

            console.log("Async task 5 is completed");
            if(!error){
                resolve("sended through resolve")
            }
            else{
                reject("We have an error in Promise 5")
            }
        }, 2000);

})
prom5
.then(function(val){
    console.log("Promise 5 is consumed")
    console.log(val);
})
.catch(function(err){
    console.log(err);
})
.finally(function(){
    console.log("FINALLY PROMISE FIVE IS DONE");
})



let prom6 = new Promise(function(resolve,reject){
    setTimeout(() => {
        // let error = true
        let error = false
        if(!error){
            console.log("Promise 6 is consumed");
            resolve({username:"reacher",password:"123"})

        }else{
            reject("ERROR(p6):The Season Is Finished")
        }
    }, 2000);
})

// Handling with async and await
// in this we can not handle catch gracefully(so always use try ana catch block to handle errors)
async function handlePromiseSix(){
    try{
        let respone = await prom6  // is is an object we do not use prom6 ()
        console.log(respone)
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("finally promise 6 ends here");

    }
}
handlePromiseSix()






// Some promise api check notes for more
Promise.allSettled([prom1, prom3, prom4, prom5, prom6])
.then((results)=>
{
    console.log("Promise.allSettled results:", results)
})


Promise.all([prom1, prom3, prom4, prom5, prom6])
.then((results)=>
{
    console.log("Promise.all results:", results)
})
.catch((err)=>{
    console.log("Promise.all errors:", err);
})


Promise.race([prom1, prom3, prom4, prom5, prom6])
.then((results)=>
{
    console.log("Promise.race results:", results)
})
.catch((err)=>{
    console.log("Promise.race errors:", err);
})

