// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

// You will automatically learn about this and apply in this. ☕️

// let txt_box = document.getElementById('user-input');
// txt_box.addEventListener('input', async (e) => {
//   if (e.key == 'Backspace' || e.key == ' ') {
//     console.log('no action');
//   } else {
//     let a = await fetch('https://randomuser.me/api/');
//     let response = await a.json();

//     let img = await response.results[0].picture.medium;
//     let e_mail = response.results[0].email;
//     let age = response.results[0].dob.age;
//     let gender = response.results[0].gender;
//     let city = response.results[0].location.city;
//     let country = response.results[0].location.country;
//     let postcode = response.results[0].location.postcode;

//     document.querySelector('.user-card').style.display = 'block';
//     document.querySelector('.user-card').innerHTML = `
//   <div class="img">
//           <img src="${img}" alt="">
//         </div>
//   <div class="gender">Gender:-${gender}</div>
//   <div class="age">Age:-${age}</div>
//   <div class="email">E-mail:-${e_mail}</div>
//   <div class="city">City:-${city}</div>
//   <div class="country">Country:-${country}</div>
//   <div class="postcode">Postcode:-${postcode}</div>`;
//     txt_box.value = '';
//     // console.log("finish")
//   }
// });

function debounce(func, delay) {
    let timerId;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timerId);
        timerId = setTimeout(function() {
            func.apply(context, args);
        }, delay);
    };
  }
  const handleSearch = async () => {
    let userInput = txt_box.value.trim();
    if (userInput.length === 0) return; // If input is empty, do nothing
    let response = await fetch(`https://randomuser.me/api/?results=1&seed=${userInput}`);
    let data = await response.json();
    let user = data.results[0];
    let img = user.picture.medium;
    let email = user.email;
    let age = user.dob.age;
    let gender = user.gender;
    let city = user.location.city;
    let country = user.location.country;
    let postcode = user.location.postcode;
    document.querySelector('.user-card').style.display = 'block';
    document.querySelector('.user-card').innerHTML = `
        <div class="img">
            <img src="${img}" alt="">
        </div>
        <div class="gender">Gender: ${gender}</div>
        <div class="age">Age: ${age}</div>
        <div class="email">E-mail: ${email}</div>
        <div class="city">City: ${city}</div>
        <div class="country">Country: ${country}</div>
        <div class="postcode">Postcode: ${postcode}</div>
    `;
    txt_box.value = '';
  };
  const debouncedSearch = debounce(handleSearch, 500); 
  let txt_box = document.getElementById('user-input');
  txt_box.addEventListener('input', debouncedSearch); 
  
  