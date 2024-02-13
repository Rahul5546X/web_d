let no = document.querySelector(".no")
let yes = document.querySelector(".yes")
let txt = document.querySelector(".text")
no.addEventListener("click", (e) => {

    let arr = ["Take a chance on love, you won't regret it!🥲", "Don't let fear hold you back from love🤐", "Love is worth the risk, go for it 🤕", " Every love story begins with a leap of faith!🫨", "Say yes to love and open your heart to new possibilities!🥹"]

    let x = Math.floor(150 * Math.random() + 1)
    let y = Math.floor(200 * Math.random() + 1)
    let ind = Math.floor(5 * Math.random() + 0)
    // console.log("hovered")

    no.style.transform = `translateX(${x}px) translateY(${y}px)`
    // console.log(x,y,ind);
    txt.innerHTML = `${arr[ind]}`
})


yes.addEventListener("click", (e) => {
    txt.innerHTML = "Yes! Let's make beautiful memories together! 💞😍"
    no.style.transform = `translateX(0px) translateY(0px)`
    let a = setInterval(() => {
        let random = randomColor()
        document.body.style.backgroundColor = random;
    }, 500);
})

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`;
    return color;
}



