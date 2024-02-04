// immediately invoked function expression 
/*      (function(){
            body 
        }) () 
*/

// to stop the function from global pollution

(function tea(){
    // named iife
    console.log("tea is ready");
}) (); // for calling the function 
//always use semicolon while ending the function qnki ese usko pta hi nhi lgega ki rokna kahan h context

(function tea2(name){
    // named iife
    console.log(`${name} tea 2 is ready`);
}) ("Red Label") ;

( () =>{
    // unnamed iife
    console.log("tea 3 is ready");
})  () ;

( (name) =>{
    // unnamed iife
    console.log(`${name} tea 4 is ready`);
})  ("TAAJA ") ;

