console.log("Script intializing...")


let click = document.querySelector(".child")
click.addEventListener("click", (e) => { /*e is event object */
    e.stopPropagation()  /* to stop event bubbling  it has a block scope*/
    alert("Child is clicked")
})

let click1 = document.querySelector(".childContainer")
click1.addEventListener("click", (e) => {
    e.stopPropagation()
    alert("Child container is clicked")
})

// Define the function separately if you want to remove the handler
function clickHandler(){
    alert("container is clicked");
    };
    
    // Add the event listener using the defined function
    document.querySelector(".container").addEventListener("click", clickHandler);
    
    // Remove the event listener using the same function reference
    document.querySelector(".container").removeEventListener("click", clickHandler);


    // ******************event bubbling*******************
// child  pr click kroge to container aur child container dono pr click hoga
// childcontainer pr click kroge to childContainer aur container dono pr hoga
// container pr kroge to sirf usi pr hoga

// In this scenario ek bar click krne pr 3 alert aa rhe hn
// isliye event khud b khud bubble ho jayega isko bolte hn event bubbling


// to stop this we should stop the propogation using
// e.stopPropagation()



// if you want something to happen repeatedly within a interval we can use setInterval function
// It is a function which also takes function and time interval(interval is in millisecond)
// random color generator
function color_random(){
    let r = Math.floor(1+Math.random()*256)
    let g = Math.floor(1+Math.random()*256)
    let b = Math.floor(1+Math.random()*256)
    return `rgb(${r} ,${g} ,${b})`;
}
console.log(color_random())

let a = setInterval(() => {
    document.querySelector(".child").style.backgroundColor = color_random()
    document.querySelector(".childContainer").style.backgroundColor = color_random()
    document.querySelector(".container").style.backgroundColor = color_random()
}, 1000);

console.log(a)
// /clear interval
// agr set inerval ko rokna chahte ho to jo number e return  krega usko as a value de do clear interval mn

// clearInterval(a)


// set timeout
// ekdm same syntax h bs e ek bar run hoga
// let a = setTimeout(() => {
//     document.querySelector(".child").style.backgroundColor = color_random()
//     // document.querySelector(".childContainer").style.backgroundColor = color_random()
//     // document.querySelector(".container").style.backgroundColor = color_random()
// }, 2000);

// clearTimeout(a)