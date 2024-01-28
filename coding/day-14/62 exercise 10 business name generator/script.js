// crazy amazing fire
//  engine foods garments
// bros limited hub
function adjectives() {
    let random_number = Math.floor(Math.random() *3)
    let a = "crazy"
    let b = "amazing"
    let c = "fire"
    if(random_number==0){
        return a;
    }
    else if(random_number==1){
        return b;
    }
    else{
        return c;
    }
}
function main_name()
{
    let random_number = Math.floor(Math.random() *3)
    let a = "engine"
    let b = "foods"
    let c= "garments"
    if(random_number==0){
        return a;
    }
    else if(random_number==1){
        return b;
    }
    else{
        return c;
    }
}
function last_name()
{
    let random_number = Math.floor(Math.random() *3)
    let a = "bros"
    let b = "limited"
    let c= "hub"
    if(random_number==0){
        return a;
    }
    else if(random_number==1){
        return b;
    }
    else{  //random number = 2
        return c;
    }
}
// Math.random() used with Math.floor() can be used to return random integers.
// let random_number = Math.floor(Math.random() *3)  // it'll return a random integer from (0 to 2)both included

// way 1 choose random once
// console.log(random_number)
// console.log(`Your Brand name is \n \t ${adjectives(random_number)} ${main_name(random_number)} ${last_name(random_number)}`)
// console.log(adjectives() + " " +main_name() +" "+ last_name())


// way 2 choose random individually for each function
console.log(`Your Brand name is \n \t ${adjectives()} ${main_name()} ${last_name()}`)