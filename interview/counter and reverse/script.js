let btn = document.querySelector(".btn")
let counter = document.querySelector(".counter")

btn.addEventListener("click", (e) => {

    console.log("it is clicked");
    let reverse = false

    let count = Number(counter.innerHTML)
    let a = setInterval(() => {
        if (reverse == false) {
            if (count <= 9) {
                count++
                counter.innerHTML = count
            }
            else{
                reverse = true;
            }
        }else{
            if(count>0){
                count--
                counter.innerHTML = count
            }
            else{
                clearInterval(a)
            }
        }
    }, 300);
})