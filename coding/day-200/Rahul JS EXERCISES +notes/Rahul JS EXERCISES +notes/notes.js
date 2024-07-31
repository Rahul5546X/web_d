// Can be also done with previous btn approach but accordion will not open again if it the last accordion closed.
// function handleAccordianVisibility() {
//   const questions = document.querySelectorAll(".question_item");

//   questions.forEach((ques) => {
//     ques.addEventListener("click", () => {
//       // Close the open accordion if any.
//       questions.forEach((item) => {
//         if (item !== ques) {
//           item.querySelector(".answer").classList.remove("visible");
//           item.querySelector(".answer").classList.add("invisible");
//         }
//       });

//       // Toggle the clicked accordion
//       ques.querySelector(".answer").classList.toggle("invisible");
//       ques.querySelector(".answer").classList.toggle("visible");
//     });
//   });
// }

function handleAccordianVisibility() {
   const questions = document.querySelectorAll(".question_item");
   let openItem = null;
    questions.forEach((question)=>{
       question.addEventListener("click",(e)=>{
          e.stopPropagation();
          const answer = question.querySelector(".answer");
         if(openItem){
            openItem.classList.remove("visible");
            openItem.classList.add("invisible");
         }
         if(openItem === answer){
            openItem = null;
         }
         else{
            answer.classList.toggle("invisible");
            answer.classList.toggle("visible");
            openItem = answer;
         }
       })
    })
}

// function handleAccordionVisibility() {
//   const accordionItems = document.querySelectorAll(".accordion_item");
//   let openContent = null;
//   let rotatedIcon = null;

//   accordionItems.forEach((item) => {
//       item.addEventListener("click", (e) => {
//           e.stopPropagation();
//           const content = item.querySelector(".accordion_content");
//           const icon = item.querySelector(".accordion_icon");

//           // If any accordion content is opened and its icon is rotated, close it and reset the icon
//           if (openContent) {
//               openContent.classList.remove("accordion_visible");
//               openContent.classList.add("accordion_invisble");
//               if (rotatedIcon) {
//                   rotatedIcon.classList.remove("rotate");
//               }
//           }

//           // If the currently clicked item is the same as the open one, close it.
//           if (openContent === content) {
//               openContent = null;
//               rotatedIcon = null;
//           } else {  //open new
//               content.classList.remove("accordion_invisble");
//               content.classList.add("accordion_visible");
//               icon.classList.add("rotate");
//               openContent = content;
//               rotatedIcon = icon;
//           }
//       });
//   });
// }
// Using previous button:-Not work if a button is clicked twice it's styles does not change.
// function btnColorHandler() {
//    const btnTextWrapper = document.querySelector(".button_text_wrapper");
//    const btnWrapper = document.querySelector(".buttons_wrapper");
//    btnWrapper.innerHTML += `<button id = "red">Red</button>  
//                             <button id = "yellow">Yellow</button>
//                             <button id = "green">Green</button>
//                             <button id = "blue">Blue</button>`;

//   const btnList = btnWrapper.querySelectorAll("button");
//   const selectedBtnInfo = document.createElement("p");
//   btnTextWrapper.appendChild(selectedBtnInfo);

//   let previousBtn = null;

//   btnList.forEach((btn)=>{
//     btn.addEventListener("click", (e) => {
//       if(previousBtn){
//         previousBtn.style.backgroundColor = "";
//         previousBtn.style.color = "";
//       }
//       const color = e.target.id;
//       btn.style.backgroundColor = color;
//       btn.style.color = "white";
//       btnWrapper.style.border = `1px solid ${color}`;
//       selectedBtnInfo.innerText = `${color} button is clicked`;
//       selectedBtnInfo.style.color = `${color}`;

//       previousBtn = btn;
//     });
//   });
// }

// function btnColorHandler() {
//    const btnTextWrapper = document.querySelector(".button_text_wrapper");
//    const btnWrapper = document.querySelector(".buttons_wrapper");
//    const btnArray = ['red','yellow','green','blue'];  //We can add multiple buttons easily.
//    let previousBtn = null;

//    btnArray.forEach((color)=>{
//       const button = document.createElement("button");
//       button.setAttribute("id",color);
//       button.innerText = color;
//       btnWrapper.appendChild(button);

//       button.addEventListener("click", (e) => {
//          if(previousBtn){
//            previousBtn.style.backgroundColor = "";
//            previousBtn.style.color = "";
//          }
//          const color = e.target.id;
//          button.style.backgroundColor = color;
//          button.style.color = "white";
//          btnWrapper.style.border = `1px solid ${color}`;
//          selectedBtnInfo.innerText = `${color} button is clicked`;
//          selectedBtnInfo.style.color = `${color}`;
   
//          previousBtn = button;
//          })
//       })

//   const selectedBtnInfo = document.createElement("p");
//   btnTextWrapper.appendChild(selectedBtnInfo);
// }

// function btnColorHandler() {
//    const btnTextWrapper = document.querySelector(".button_text_wrapper");
//    const btnWrapper = document.querySelector(".buttons_wrapper");
//    btnWrapper.innerHTML += `<button id = "red">Red</button>  
//                             <button id = "yellow">Yellow</button>
//                             <button id = "green">Green</button>
//                             <button id = "blue">Blue</button>`;

//   const btnList = btnWrapper.querySelectorAll("button");
//   const selectedBtnInfo = document.createElement("p");
//   btnTextWrapper.appendChild(selectedBtnInfo);

//   let previousBtn = null;

//   btnList.forEach((btn)=>{
//     btn.addEventListener("click", (e) => {
//       if(previousBtn){
//         previousBtn.style.backgroundColor = "";
//         previousBtn.style.color = "";
//       }
//       const color = e.target.id;
//       btn.style.backgroundColor = color;
//       btn.style.color = "white";
//       btnWrapper.style.border = `1px solid ${color}`;
//       selectedBtnInfo.innerText = `${color} button is clicked`;
//       selectedBtnInfo.style.color = `${color}`;

//       previousBtn = btn;
//     });
//   });
// }

function btnColorHandler() {
   const btnTextWrapper = document.querySelector(".button_text_wrapper");
   const btnWrapper = document.querySelector(".buttons_wrapper");
   const btnArray = ['red','yellow','green','blue'];  //We can add multiple buttons easily.
   let activeBtn = null;

   btnArray.forEach((color)=>{
      const button = document.createElement("button");
      button.setAttribute("id",color);
      button.innerText = color;
      btnWrapper.appendChild(button);

      button.addEventListener("click", (e) => {
         if(activeBtn){
           activeBtn.style.backgroundColor = "";
           activeBtn.style.color = "";
         }
         if(activeBtn === button){
            button.style.color = "";
            btnWrapper.style.border = "";
            selectedBtnInfo.innerText = "No Button is selected.";
            selectedBtnInfo.style.color = "black";
            activeBtn = null;

         }
         else{
            const color = e.target.id;
            button.style.backgroundColor = color;
            button.style.color = "white";
            btnWrapper.style.border = `1px solid ${color}`;
            selectedBtnInfo.innerText = `${color} button is clicked`;
            selectedBtnInfo.style.color = `${color}`;
            activeBtn = button;
         }
         })
      })

  const selectedBtnInfo = document.createElement("p");
  btnTextWrapper.appendChild(selectedBtnInfo);
}


// With previous button approach
function manageFrequencyBtns() {
   const btnContainer = document.getElementById("button_container");

   let previousBtn = null;
   const {response: {data: { frequencies }}} = apploadData; //Using object destructuring.

   for (const { name } of frequencies) {         //Getting name from the frequencies with help of object destructuring.
      const button = document.createElement("button");
      button.classList.add("frequency-btnStyle");
      button.innerText = name;
      btnContainer.appendChild(button);

      button.addEventListener("click",(e)=>{
         e.stopPropagation();
         if(previousBtn){
            previousBtn.classList.remove("active");
         }
         button.classList.add("active");
         previousBtn = button;
      })
   } 
}

// With activeBtn(openItem) approach.
function manageFrequencyBtns() {
   const btnContainer = document.getElementById("button_container");

   let activeBtn = null;
   const {response: {data: { frequencies }}} = apploadData; //Using object destructuring.

   for (const { name } of frequencies) {         //Getting name from the frequencies with help of object destructuring.
      const button = document.createElement("button");
      button.classList.add("frequency-btnStyle");
      button.innerText = name;
      btnContainer.appendChild(button);

      button.addEventListener("click",(e)=>{
         e.stopPropagation();
         if(activeBtn){
            activeBtn.classList.remove("active");
         }
         if(activeBtn === button){
            activeBtn = null;
         }
         else{
            button.classList.add("active");
            activeBtn = button;
         }
      })
   } 
}

// checkboxes are created with innerhtml
 /**
  * extrasCheckboxes
  * This function firstly selects the ul in which we'll add all the checkboxes.
  * Then it get the data from API and add all the li items to the ul dynamically.
  * Then it selects all the chekboxes and add a event listener on every single checkbox which will check that if the checkbox if checked add its id to the array and if it is unchecked remove the id from the array.
  * At the end we have an array which will have all the id's of checked checkboxes.
  */

//  function extrasCheckboxes() {
//    const checkedArray = [];                      // It'll hold the id's of the checked checkboxes.
//    const checkboxesList = document.querySelector(".extras_checkboxes_list");
//    try {
//       const {response: {data: { extras }} } = apploadData;
//       for (const { id, name } of extras) {
//          checkboxesList.innerHTML += `
//                <li>
//                   <input type="checkbox" id="${id}">
//                   <label for="${id}"><img src="assets/images/checkbox_4.jpg" alt="A random image" width="50" height="50"></label>
//                   <label for="${id}" class="name">${name}</label>
//                </li>`;
//       }

//       const allCheckboxes = checkboxesList.querySelectorAll("input[type='checkbox']")

//       /**
//        * It takes the array and the id and using splice removes the id.
//        * @param {*} arr The array from which we have to remove the id.
//        * @param {*} value The id which we have to remove.
//        */
//       function removeId(arr,id){
//          const index = arr.indexOf(id);
//          if(index > -1){
//             arr.splice(index,1);
//             console.log("removed")
//          }
//       }

//       allCheckboxes.forEach((checkbox)=>{
//          checkbox.addEventListener("change",(event)=>{
//             event.stopPropagation();
//             const checkboxID = checkbox.getAttribute("id")
//             if(event.currentTarget.checked){
//                checkedArray.push(checkboxID);
//             }
//             else{
//                removeId(checkedArray,checkboxID);
//             }
//          })
//       });
//       console.log(`The array of checked checkboxes is`);
//       console.log(checkedArray);

//    } catch (error) {
//       // throw new Error(`HTTP error! Status: ${response.status}`);
//       console.log(`An error is found ${error}`);
//    }
// }

// Tooltip with getclientboundingrect
// function tooltipPosition() {
//   const tooltipDiv = document.createElement("div");
//   tooltipDiv.setAttribute("class", "price_tooltip absolute");
//   tooltipDiv.setAttribute("id", "tooltip_div");

//   const tooltipWrapper = document.querySelector(".price_icon_wrapper");
//   const tooltipIcon = document.querySelector(".tooltip_icon");
//   const tooltipText = document.querySelector(".tooltip_text");
//   const tooltipTitle = tooltipText.getAttribute("title");

//   tooltipIcon.addEventListener("mouseenter", () => {
//     tooltipWrapper.appendChild(tooltipDiv);
//     tooltipDiv.innerText = tooltipTitle;
//     tooltipText.removeAttribute("title");
//     tooltipDiv.style.display = "block";
//     updateTooltipPosition();
//   });

// // //   tooltipIcon.addEventListener("mouseleave", () => {
// // //     tooltipText.setAttribute("title", tooltipTitle);
// // //     tooltipDiv.style.display = "none";
// // //   });

//   window.addEventListener("scroll", updateTooltipPosition);

//   function updateTooltipPosition() {
//     const iconRect = tooltipIcon.getBoundingClientRect();
//     console.log(iconRect)
//     const tooltipHeight = tooltipDiv.offsetHeight;
//     const tooltipWidth = tooltipDiv.offsetWidth;
//    console.log(tooltipHeight,tooltipWidth)
//     // Position above or below the icon
//     if (iconRect.top - tooltipHeight > 0) {
//       //  above
//       tooltipDiv.style.top = `${iconRect.top-tooltipHeight}px`;
//       // tooltipDiv.style.left = `${iconRect.left + (iconRect.width / 2) - (tooltipWidth / 2)}px`;
//     } else {
//       //  below
//       tooltipDiv.style.top = `${iconRect.bottom}px`;
//     }
//   }
// }

// function formEmptyFieldValidator(event) {
//    event.preventDefault();
//    let isValid = true;
//    let isNameHasSpecialChar;
 
//    const nameContainer = document.getElementById("nameContainer");
//    const mailContainer = document.getElementById("mailContainer");
//    const reviewContainer = document.getElementById("reviewContainer");
 
//    const userName = document.getElementById("userName").value.trim();
//    const userMail = document.getElementById("userMail").value.trim();
//    const userReview = document.getElementById("userReview").value.trim();
 
//    // If there are any previous error messages we have to clear them. 
//    document.querySelectorAll(".error").forEach((error) => error.remove());
 
//    /**
//     * This function creates and show error message if any of the form field is empty or name contains any special character.
//     * 
//     */
//    function showError(fieldName,field){
//       const errorSpan = document.createElement("span");
//       errorSpan.className = "error";
//       if(isNameHasSpecialChar){
//          errorSpan.innerHTML = `${fieldName} can not contain any special characters.`
//       }
//       else{
//          errorSpan.innerHTML = `${fieldName} can not be empty.`;
//       }
//       field.appendChild(errorSpan);
//    }

//    /**
//     * This function checks that the name entered by user should not contain any special characters.
//     * If name contains any special characters it'll show a error message.
//     * It uses a regular expression which contains all the special characters and then it match the userName to the regular expression.
//     */
//    function specialCharChecker(userName){
//       try {
//          const specialChars = "!`@#$%^&*()+=-[]\\';,./{}|\":<>?~_";
//          for (let i = 0; i < userName.length; i++) {
//            if (specialChars.indexOf(userName.charAt(i)) != -1) {
//              return true;
//            }
//          }
//        } catch (error) {
//          throw new Error("NOT VALID NAME");
//        }
//        return false;
//    }

   // function printValues() {
   //    console.log(`Name is ${userName} and e-mail is ${userMail} and review is "${userReview}"`);
   // }
 
   // function clearValues(){
   //     document.getElementById("userName").value = null;
   //     document.getElementById("userMail").value = null;
   //     document.getElementById("userReview").value = null;
   // }

//    if (userName.length === 0) {
//       showError("Name",nameContainer);
//       isValid = false;
//    }else { 
//       const hasSpecialChar = specialCharChecker(userName);
//       if(hasSpecialChar){
//          isNameHasSpecialChar = true;
//          showError("Name",nameContainer);
//          isValid = false;
//       }
//       isNameHasSpecialChar = false;
//    }
 
//    if (userMail.length === 0) {
//       showError("E-mail",mailContainer)
//       isValid = false;
//    }
 
//    if (userReview.length === 0) {
//       showError("Review",reviewContainer)
//       isValid = false;
//    }


//    if(isValid){
//      printValues();
//      clearValues();
//    }
// }

// function formEmptyFieldValidator(event) {
//   event.preventDefault();
//   let isValid = true;

//   const nameContainer = document.getElementById("nameContainer");
//   const mailContainer = document.getElementById("mailContainer");
//   const reviewContainer = document.getElementById("reviewContainer");

//   const userName = document.getElementById("userName").value.trim();
//   const userMail = document.getElementById("userMail").value.trim();
//   const userReview = document.getElementById("userReview").value.trim();

//   // Clear previous error messages
//   document.querySelectorAll(".error").forEach(error => error.remove());

//   function showError(fieldName, field, message) {
//       const errorSpan = document.createElement("span");
//       errorSpan.className = "error";
//       errorSpan.innerHTML = message;
//       field.appendChild(errorSpan);
//   }

//   function specialCharChecker(value) {
//       const specialChars = /[!`@#$%^&*()+=\-[\]\\';,/{}|\\":<>?~_]/;
//       return specialChars.test(value);
//   }

//   function emailValidator(email) {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return emailRegex.test(email);
//   }

//   if (userName.length === 0) {
//       showError("Name", nameContainer, "Name cannot be empty.");
//       isValid = false;
//   } else if (specialCharChecker(userName)) {
//       showError("Name", nameContainer, "Name cannot contain special characters.");
//       isValid = false;
//   }

//   if (userMail.length === 0) {
//       showError("Email", mailContainer, "Email cannot be empty.");
//       isValid = false;
//   } else if (!emailValidator(userMail)) {
//       showError("Email", mailContainer, "Invalid email format.");
//       isValid = false;
//   }

//   if (userReview.length === 0) {
//       showError("Review", reviewContainer, "Review cannot be empty.");
//       isValid = false;
//   } else if (specialCharChecker(userReview)) {
//       showError("Review", reviewContainer, "Review cannot contain special characters.");
//       isValid = false;
//   }

//   if (isValid) {
//       console.log(`Name: ${userName}, Email: ${userMail}, Review: "${userReview}"`);
//       document.getElementById("myForm").reset();
//   }
// }


// function handleAccordianVisibility() {
//    const questions = document.querySelectorAll(".question_item");
//    let openItem = null;
//    let rotatedIcon = null;
//     questions.forEach((question)=>{
//        question.addEventListener("click",(e)=>{
//           e.stopPropagation();
//           const answer = question.querySelector(".answer");
//           const accordionIcon = question.querySelector(".accordion_icon");
//          // If any accordion is opened and its icon is rotated so before opening another accordion it is closed and its icon is set back to default position.
//           if(openItem){
//             openItem.classList.remove("visible");
//             openItem.classList.add("invisible");
//             rotatedIcon.classList.remove("rotate");
//          }
//          if(openItem === answer){
//             openItem = null;
//          }
//          else{
//             answer.classList.toggle("invisible");
//             answer.classList.toggle("visible");
//             accordionIcon.classList.add("rotate");
//             openItem = answer;
//             rotatedIcon = accordionIcon;   
//          }
//        })
//     })
// }

// tooltipDiv.style.left = `${tooltipWrapper.offsetWidth / 2 - tooltipDiv.offsetWidth / 2}px`;

// e smjh aagya tha 
// if(previouslyActive){
//    console.log("if")
//    if(previouslyActive === accordionItem){
//       console.log("if 2")
//       accordionItem.classList.remove("active");
//    }
//    previouslyActive.classList.remove("active");
// }

// if(!(previouslyActive === accordionItem)){
//    accordionItem.classList.add("active");
//    console.log("else")
// }