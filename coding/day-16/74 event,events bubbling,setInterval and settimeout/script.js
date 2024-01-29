let btn = document.getElementById("btn")

// btn.addEventListener("event you want to listen", "function which will run when the event happens")


btn.addEventListener("click", ()=>{
    let content = document.querySelector(".box")
    alert("the content will be changed if you click on the button")
    let c = confirm("Are you sure that you want to change the content")
    // console.log(content)

    if(c ==true){
        content.innerHTML = "i'm the changed content"
        content.style.color = "red"  
    }
})

// let content = document.querySelector(".box")
