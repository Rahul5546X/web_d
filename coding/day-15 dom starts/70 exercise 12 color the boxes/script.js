// let a = Math.floor(Math.random() * 5)
// // let a = 0
// console.log(a)

// if (a == 0) {
//     let boxes = document.getElementsByClassName("box")
//     boxes[1].style.backgroundColor = "red"
// }
// else if (a == 1) {
//     let boxes = document.getElementsByClassName("box")
//     boxes[1].style.backgroundColor = "cyan"
// }
// else if (a == 2) {
//     let boxes = document.getElementsByClassName("box")
//     boxes[1].style.backgroundColor = "green"
// }
// else if (a == 3) {
//     let boxes = document.getElementsByClassName("box")
//     boxes[1].style.backgroundColor = "yellow"
// }
// else //a ==4
// {
//     let boxes = document.getElementsByClassName("box")
//     boxes[1].style.backgroundColor = "blue"
// }

console.log("script working..")
let boxes = document.getElementsByClassName("box")


function getRandombg() {
    val1 = Math.floor(0+Math.random()*256)
    val2 = Math.floor(0+Math.random()*256)
    val3 = Math.floor(0+Math.random()*256)
    return (`rgb(${val1},${val2},${val3})`)
}

function getRandomC() {
    val1 = Math.floor(0+Math.random()*256)
    val2 = Math.floor(0+Math.random()*256)
    val3 = Math.floor(0+Math.random()*256)
    return (`rgb(${val1},${val2},${val3})`)
}

// boxes[1].style.backgroundColor = getRandombg()
// boxes[1].style.color = getRandomC()

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandombg()
    e.style.color = getRandomC()
})
console.log(getRandombg())
