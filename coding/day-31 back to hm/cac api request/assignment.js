let card= document.querySelector(".card")
document.querySelector(".buttons").addEventListener("click", (e) => {
    let url = 'https://api.github.com/users/hiteshchoudhary'
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = function () { // This section typically handles the response when it's received so it is required
        if (xhr.readyState == 4) { // agr e ni lkihenge to jb jb state hange hogi hr bar chleega e andr vala code
            let data = JSON.parse(this.responseText)
            console.log(data);
            let img = data.avatar_url
            let followers = data.followers
            card.innerHTML = `<img src="${img}" alt="">
            <p>
                Followers = ${followers}
            </p>`
        }
    }
    xhr.send()
})