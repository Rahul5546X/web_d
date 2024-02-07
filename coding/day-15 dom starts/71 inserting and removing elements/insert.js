// inserting and removing elements 
let div = document.createElement("div")
div.innerHTML= "<b> I am inserted through javascript </b>"
div.setAttribute("class", "created")

// data can be inserted dynamically
//append means end
// document.querySelector(".container").append(div)

// before
// document.querySelector(".container").before(div)

// after
// document.querySelector(".container").after(div)

// prepend
document.querySelector(".container").prepend(div)
//replace with


//insert adjacent html/text/element

let cont = document.querySelector(".container")

cont.insertAdjacentHTML("beforebegin", "<b>I'm inserted with insertAdjacentHTML</b>")
// try out other methods


//gives the list of all the classes of the selected element

console.log(document.querySelector(".container").classList)

// name of all classes
console.log(document.querySelector(".container").className)


//adding new classes
document.querySelector(".container").classList.add("yellow")
console.log(document.querySelector(".container").classList)


//removing classes
document.querySelector(".container").classList.remove("blue")
console.log(document.querySelector(".container").classList)
console.log(document.querySelector(".container").className)


// document.querySelector(".container").className.add("cyan")// can not do this


// ***important function***
//toggle --> it means agr yellow class hogi to vo ht jayegi aur agr nahi hogi to vo lg jayegi(ulta ho jayega)
document.querySelector(".container").classList.toggle("yellow")
console.log(document.querySelector(".container").classList)

