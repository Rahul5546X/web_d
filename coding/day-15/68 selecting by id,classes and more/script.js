// targeting with classes and id's


// targeting by class (elements)
let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[1].style.backgroundColor = "black"
// document.getElementsByClassName("boxa").style.backgroundColor = "blue" not working


// targeting by id (element)
// if you wanna target a particular element 
// long method 
// let box = document.getElementById("box3")
// box.style.backgroundColor = "black"


// short method
document.getElementById("box3").style.backgroundColor = "green" 




// targeting by query selector

document.querySelector(".box").style.backgroundColor = "cyan"  // work with first selector (jaise agr kisi mn box class same h to jo sbse phle aayega usiko select krega e)


// agr ap hr element ko select krna chahte ho jismn same class h to ap use kro  (but it is not that simple to use)
// document.querySelectorAll(".box") 
 // it'll return an html selection that has all the elements of class .box

console.log(document.querySelectorAll(".box"))
// so to access every element in the nodelist(html selection we have to use loops(for-each))

// document.querySelectorAll(".box").forEach(e =>{
//     // console.log(e)
//     e.style.backgroundColor = "yellow"
// })

// specificity sbse jada hogi iski

// by tag name
// document.getElementsByTagName("div")


// matches  //returns true or false
// closest // look for the nearest ancestor that matches        the css selector
// contains   // true or false  if one elements is in another element  check notes for better understanding



