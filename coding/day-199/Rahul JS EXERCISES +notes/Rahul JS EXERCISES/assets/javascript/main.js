// UTILITY FUNCTIONS

/**
 * This function return a boolean values based on the lenght of the array.
 */
function isArrayNotEmpty(arr){
   if(arr.length>0){
      return true;
   }
   else{
      return false;
   }
}

/**
 * This function checks that while destructuring if there is not data available it return an empty object instead of error. 
 */
function destructObj(obj){
   return obj ?? {};
}

/**
 * This function uses the data fetched from the API and creates buttons with the data.
 * Then it adds the active class to the button which is clicked and remove the active class if previously assigned to any button.
 */
function createFrequencyBtn(frequencies) {
   if(isArrayNotEmpty(frequencies)){
      const btnContainer = document.getElementById("button_container");
      for (const frequency of frequencies) {          
         try {
            const btnName = frequency?.name;
            const btn = document.createElement("button");
            btn.classList.add("frequency_btn");
            btn.innerText = btnName;
            btnContainer.appendChild(btn);
      
            // btn.addEventListener("click",(e)=>{
            //    e.stopPropagation();
            //    btnContainer.querySelector(".active").classList.remove("active");
            //    btn.classList.add("active");
            // })
            btn.addEventListener("click", (e) => {
              e.stopPropagation();
              const activeBtn = btnContainer.querySelector(".active");
              if (activeBtn) {
                  activeBtn.classList.remove("active");
              }
              btn.classList.add("active");
          });
         } catch (error) {
            console.log("property not available "+error);
         } 
         const firstBtn = btnContainer.querySelector(".frequency_btn");
          if (firstBtn) {
              firstBtn.classList.add("active");
          }
      }
      // const activeBtn = btnContainer.querySelector(".frequency_btn");
      // activeBtn.classList.add("active");
   }
   else{
      console.log("There is no data in frequency. The array is empty.");
   }
}

/**
* servicesSelector
* This function get the id and name from the API.
* We get the data from API and then we de-structure the data to get name and id from the service category.
* Then we create an option element and add the name(using innerText) and id(using setAttribute) to it and append the option element to select element.
*/
function servicesSelector(serviceCategory) {
   if(isArrayNotEmpty(serviceCategory)){
      const servicesList = document.querySelector(".js_services_list");
      const selectedOption = servicesList.querySelector("select");
      for (const serviceElement of serviceCategory) {
         try {
               const serviceName = serviceElement?.name;
               const serviceId = serviceElement?.id;
               // We can create a new node and append it to selectedOption.
               const optionElement = document.createElement("option");
               selectedOption.append(optionElement);
               optionElement.setAttribute("value", serviceId);
               optionElement.innerText = serviceName;
         } 
         catch (error) {
            console.log("property not available "+error);
         }
      }
      selectedOption.addEventListener("change", (event) => {
         // It logs the id corresponding to the selected option(value attribute).
         console.log("The selected service has id " + event.target.value);
      });
   }
   else{
      console.log("There is no data in service_category");
   }
}

/**
 * extrasCheckboxes
 * This function firstly selects the ul in which we'll add all the checkboxes.
 * Then it get the data from API and add all the li items to the ul dynamically.
 * Then it selects all the chekboxes and add a event listener on every single checkbox which will check that if the checkbox if checked add its id to the array and if it is unchecked remove the id from the array.
 * At the end we have an array which will have all the id's of checked checkboxes.
 */
function  extrasCheckboxes(extras) {
   /**
   * It takes the array and the id and using splice removes the id with the help of slice method.
   */
   function removeId(arr,id){
      const index = arr.indexOf(id);
      if(index > -1){
         arr.splice(index,1);
         console.log("removed")
      }
   }

   /**
    * This function create all the required elements we need and add them dynamically.
    * It also places an event listener on the checkbox so that when the checkbox is checked we can store its id in an array and if it is unchecked we can remove its id.
    */
   function createCheckbox(extrasId,extrasName,checkedArray){
      const checkboxesList = document.querySelector(".extras_checkboxes_list");
      const list = document.createElement("li");          //The list element.
      const inputCheckbox = document.createElement("input");      //The checkbox input element.
      inputCheckbox.setAttribute("type","checkbox");
      inputCheckbox.setAttribute("id",extrasId);

      const labelImage = document.createElement("label");
      labelImage.setAttribute("for",extrasId);
      labelImage.innerHTML = `<img src="assets/images/checkbox_4.jpg" alt="A random image" width="50" height="50">`;

      const labelText = document.createElement("label");
      labelText.setAttribute("for",extrasId);
      labelText.setAttribute("class","name");
      labelText.innerText = extrasName;

      list.appendChild(inputCheckbox);
      list.appendChild(labelImage);
      list.appendChild(labelText);
      checkboxesList.appendChild(list);

      inputCheckbox.addEventListener("change",(event)=>{
         event.stopPropagation();
         const checkboxID = inputCheckbox.getAttribute("id")
         if(event.currentTarget.checked){
            checkedArray.push(checkboxID);
         }
         else{
            removeId(checkedArray,checkboxID);
         }
         console.log(`The array of checked checkboxes is`);
         console.log(checkedArray);
      })
   }

   if(isArrayNotEmpty(extras)){
      const checkedArray = [];// It'll hold the id's of the checked checkboxes.
      for (const extra of extras) {
         try {
            const extrasId = extra?.id;
            const extrasName = extra?.name;
            createCheckbox(extrasId,extrasName,checkedArray);
         } catch (error) {
            console.log("properties not available "+error);
         }
      }
   }
   else{
      console.log("There is no data in extras.")
   }
}
/**
 * fetchApploadData
 * It is an async function used to fetch the response from the API.
 * It uses fetch method(GET) with a predefined URL.
 * After fetching the response it uses various function to dynamically load the data.
 */
async function fetchApploadData() {
   const requestUrl = "https://demo1.bookingkoala.co.in/api/v3/appload-new";
   const response = await fetch(requestUrl);
   const apploadData = await response.json();
   const { frequencies, service_category:serviceCategory, extras } = destructObj(apploadData?.response?.data);
   createFrequencyBtn(frequencies);
   servicesSelector(serviceCategory);
   extrasCheckboxes(extras);
}
fetchApploadData();

/**
 * swap
 * It takes array and index and then swaps the items present at that index.
 * As we know array are reference type so what we do in swap function will affect the actual array(that's what we need).
 * @param {*} arr The array on which we want to swap the values.
 * @param {*} i First index arr[i] that we want to swap.
 * @param {*} j Second index arr[j] with which we want to swap the value of first index.
 */
function swap(arr, indexOne, indexTwo) {
  let temperaryVar = arr[indexOne];
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = temperaryVar;
}

/**
 * removeEmpty
 * It takes an array and apply filter(that only keep the element that are not equal to null) and return the array without any empty value.It is used in exercise-14 and 35
 * @param {*} arr The array from which we want to remove all the empty values.
 * @returns It return a array with no empty values.
 */
function removeEmpty(arr) {
  const removedEmpty = arr.filter((el) => {
    return el != null;
  });
  return removedEmpty;
}

/**
 * removeDuplicates
 * This function remove duplicates from unsorted array and also remove the empty elements if there are any(used in exercise-36 and 40)
 * @param {*} arr The array from which we want to remove the duplicate items.
 * @returns It returns an array without a single duplicate item.
 */
function removeDuplicates(arr) {
  // WAY-1
  // const sortedArray = arr;
  // for (let i = 0; i < sortedArray.length - 1; i++) {
  //   for (let j = i + 1; j < sortedArray.length; j++) {
  //     if (arr[i] == arr[j]) {
  //       // delete arr[j];
  //       arr.splice(j,1);
  //     }
  //   }
  // }
  // const emptyRemoved = removeEmpty(arr);
  // return emptyRemoved;
  // return arr;

  // WITHOUT USING NESTED LOOPS WE CAN USE SETS
  let emptyArray = [];
  if (arr.length > 1) {
    return [...new Set(arr)];
  } else {
    return emptyArray;
  }
}

/**
 * USED IN EXERCISE- 26,27 and 28.
 * handleOverlayAndPopUpClose
 * It selects all the elements which should hide when we click on the overlay.
 * Then it adds and removes the classes( which are responsible for display of the popup's ) from every element individually to make sure every element hides when we click on the overlay.
 */
function handleOverlayAndPopUpClose() {
  const overlay = document.querySelector(".main_content");

  // Exercise-26
  const sidebar = document.querySelector(".sidebar_wrapper");
  const buttons = document.getElementById("drawer-btns").children;

  // Exercise-27
  const popUpBox = document.querySelector(".popup_container");

  // Exercise-28
  const popUpTemplate = document.querySelector(".popup_container_template");

  // Exercise-28
  const popUpTwo = document.querySelector(".popUpTwo_container");

  // Exercise-26
  for (const btn of buttons) {
    sidebar.classList.remove(btn.dataset.side);
  }
  sidebar.classList.add("sidebar_left_out");

  // Exercise-27
  popUpBox.classList.add("popup_invisible");
  popUpBox.classList.remove("popup_visible");

  // Exercise-28
  /**
   * If the shortcode popup is opened then if we click on the backdrop only the short codes popup will be closed.
   */
  if(popUpTwo.classList.contains("popup_invisible")){
      popUpTemplate.classList.add("popup_invisible");
      popUpTemplate.classList.remove("popup_visible");
  }

  popUpTwo.classList.remove("popup_visible");
  popUpTwo.classList.add("popup_invisible");

  overlay.classList.remove("overlay");
}






//                                                                **********************Main Exercises**********************************
/**
 * getApploadResponseXHR
 * This function select the button with id requestBtn and places a click event listener on it.
 */
function getApploadResponseXHR() {
  const requestBtn = document.getElementById("requestBtn");
  /**
   * requestResponeXHR
   * This function decide that what should happen when the requestBtn is clicked.(We get the data from the API using xmlHttpRequest).
   * It uses XMLHttpRequest method and when the ready state changes it checks that if the ready state is equal to 4, then parse the data and get the response from the data.
   */
  function requestResponeXHR() {
    try {
      const apploadApiUrl = "https://demo1.bookingkoala.co.in/api/v3/appload-new";
      const requestMethod = "GET";
      const xhr = new XMLHttpRequest();
      xhr.open(requestMethod, apploadApiUrl);
      xhr.onreadystatechange = function () {
        // Tracking the ready states continuosly.
        if (xhr.readyState === 4) {  //It means the operation is complete.
          const apploadData = JSON.parse(this.responseText);
          const response  = apploadData?.response;
          console.log(`Requested data is `);
          console.log(response);
        }
      };
      xhr.send();
    } catch (error) {
      throw new Error(`HTTP error! Status: ${response.status}`);
      // console.log("We have a error " + error);
    }
  }
  requestBtn.addEventListener("click", requestResponeXHR); // adding click event listener to the button to get the response from the API
}
getApploadResponseXHR();

/**
 * formEmptyFieldValidator
 * This function validates all the input fields that they should not be empty if any of the input field is empty it adds a warning message to the body dynamicallly.
 */
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

//    function printValues() {
//       console.log(`Name is ${userName} and e-mail is ${userMail} and review is "${userReview}"`);
//    }
 
//    function clearValues(){
//        document.getElementById("userName").value = null;
//        document.getElementById("userMail").value = null;
//        document.getElementById("userReview").value = null;
//    }

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

function formEmptyFieldValidator(event) {
  event.preventDefault();
  let isValid = true;

  const nameContainer = document.getElementById("nameContainer");
  const mailContainer = document.getElementById("mailContainer");
  const reviewContainer = document.getElementById("reviewContainer");

  const userName = document.getElementById("userName").value.trim();
  const userMail = document.getElementById("userMail").value.trim();
  const userReview = document.getElementById("userReview").value.trim();

  // Clear previous error messages
  document.querySelectorAll(".error").forEach(error => error.remove());

  function showError(field, message) {
      const errorSpan = document.createElement("span");
      errorSpan.className = "error";
      errorSpan.innerHTML = message;
      field.appendChild(errorSpan);
  }

  function isFieldEmpty(fieldValue, fieldName, fieldContainer) {
      if (fieldValue.length === 0) {
          showError(fieldContainer, `${fieldName} cannot be empty.`);
          return true;
      }
      return false;
  }

  function hasSpecialCharacters(value, fieldName, fieldContainer) {
      const specialChars = /[!`@#$%^&*()+=\-[\]\\';,/{}|\\":<>?~_]/;
      if (specialChars.test(value)) {
          showError(fieldContainer, `${fieldName} cannot contain special characters.`);
          return true;
      }
      return false;
  }

  function emailValidator(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  if (isFieldEmpty(userName, "Name", nameContainer) || hasSpecialCharacters(userName, "Name", nameContainer)) {
      isValid = false;
  }

  if (isFieldEmpty(userMail, "Email", mailContainer)) {
    isValid = false;
} else if (!emailValidator(userMail)) {
    showError(mailContainer, "Invalid email format.");
    isValid = false;
}

  if (isFieldEmpty(userReview, "Review", reviewContainer) || hasSpecialCharacters(userReview, "Review", reviewContainer)) {
      isValid = false;
  }

  if (isValid) {
      console.log(`Name: ${userName}, Email: ${userMail}, Review: "${userReview}"`);
      document.getElementById("myForm").reset();
  }
}
document.getElementById("myForm").addEventListener("submit", formEmptyFieldValidator);

/**
 * getDateTime
 * This function select the element with class clock.
 * Then with the help of setInterval and Date it takes the current date and convert it to locale string.
 * Then changes the innerText of the selected element to the date converted into locale string.
 * It repeats this process every second.
 */
function getDateTime() {
  const clockContainer = document.querySelector(".js_clock");
  setInterval(() => {
    const currentDate = new Date();
    clockContainer.innerText = currentDate.toLocaleString();
  }, 1000);
}
getDateTime();

/**
 * setIconPosition
 * It select a element with class named chat-icon-wrapper.
 * Then applies some style to it.
 * It also creates a orange circle and places it at right top of the icon wrapper.
 */
function setIconPosition() {
  const chatIcon = document.querySelector(".chat_icon_wrapper");
  chatIcon.innerHTML = `<i class="bi bi-chat-left-text"></i>`
  chatIcon.style.position = "fixed";
  chatIcon.style.right = "15px";
  chatIcon.style.bottom = "15px";

  const orangeCircle = document.createElement("div");
  orangeCircle.classList.add("absolute");
  orangeCircle.style.height = "15px";
  orangeCircle.style.width = "15px";
  orangeCircle.style.borderRadius = "50%";
  orangeCircle.style.backgroundColor= "orange";
  orangeCircle.style.top = "0";
  orangeCircle.style.right = "0";

  chatIcon.appendChild(orangeCircle);

}
setIconPosition();

/**
 * btnColorHandler
 * It select a element with class named buttons_wrapper.
 * And then with the help of innerHTML we add four buttons to the selected element.
 * When we click on any of the button we change it's background color to the id the element has specified and also writes a text that (id) button is clicked.
 */
function btnColorHandler() {
   const btnTextWrapper = document.querySelector(".js_button_text_wrapper");
   const btnWrapper = document.querySelector(".buttons_wrapper");
   const btnArray = ['red','yellow','green','blue'];  //We can add multiple buttons easily.
   let activeBtn = null;  //It is used so that we can keep track of which button is active currently and which button was active previously.

   btnArray.forEach((color)=>{
      const button = document.createElement("button");
      button.setAttribute("data-color",color);
      button.innerText = color;
      btnWrapper.appendChild(button);

      function setStyles(color){
         button.style.backgroundColor = color;
         button.style.color = "white";
         btnWrapper.style.border = `1px solid ${color}`;
         selectedBtnInfo.innerText = `${color} button is clicked`;
         selectedBtnInfo.style.color = `${color}`;
      }

      function removeActiveStyles(){
         btnWrapper.style.border = "";
         selectedBtnInfo.innerText = "No Button is selected.";
         selectedBtnInfo.style.color = "black";
      }

      button.addEventListener("click", (e) => {
         // If a button is active then its styles will be reset when an another button is clicked.
         if(activeBtn){
           activeBtn.style.backgroundColor = "";
           activeBtn.style.color = "";
         }
         // If we click on the active button again then it'll go back to its default state and there will be no active buttons.
         if(activeBtn === button){
            removeActiveStyles();
            activeBtn = null;
         }
         // If the button which is clicked is not active then it'll be active.
         else{
            const color = e.target.getAttribute("data-color");
            setStyles(color);
            activeBtn = button;
         }
      })
   })

  const selectedBtnInfo = document.createElement("p");
  selectedBtnInfo.innerText = "No Button is selected.";
  btnTextWrapper.appendChild(selectedBtnInfo);
}
btnColorHandler();

/**
 * Exercise-13
 * handleAccordianVisibility
 * In this function we select all the elements that have the class question_item.
 * Then with the help of forEach we add click event listener to every single element.
 * When they are clicked, inside them we have a element with class answer and invisible so we remove the invisible class and add the visible class.
 * When the element is clicked again we remove the visible class and add the invisible class.
 */
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

function handleAccordionVisibility() {
  const accordionItems = document.querySelectorAll(".accordion_item");
  let openContent = null;
  let rotatedIcon = null;

  accordionItems.forEach((item) => {
      item.addEventListener("click", (e) => {
          e.stopPropagation();
          const content = item.querySelector(".accordion_content");
          const icon = item.querySelector(".accordion_icon");

          // If any accordion content is opened and its icon is rotated, close it and reset the icon
          if (openContent) {
              openContent.classList.remove("accordion_visible");
              openContent.classList.add("accordion_invisble");
              if (rotatedIcon) {
                  rotatedIcon.classList.remove("rotate");
              }
          }

          // If the currently clicked item is the same as the open one, close it
          if (openContent === content) {
              openContent = null;
              rotatedIcon = null;
          } else {
              // Otherwise, open the new item
              content.classList.remove("accordion_invisble");
              content.classList.add("accordion_visible");
              icon.classList.add("rotate");
              openContent = content;
              rotatedIcon = icon;
          }
      });
  });
}
handleAccordionVisibility();


/**
 * Exercise-14
 * removeDuplicates
 * It takes an array and remove the duplicates from it.
 * @param {*} arr The array from which we want to remove the duplicates from.
 */
function removeDuplicatesExercise(arr) {
  console.log("Original array", arr);
  const duplicateFreeArray = removeDuplicates(arr);
  console.log("Duplicates free array", duplicateFreeArray);
}
removeDuplicatesExercise([0, 3, 8, 7, 6, 5, -4, 3, 2, 1, 3, 2, 5, 10, 2, 3, 4]);

/**
 * Exercise-15
 * sortArray
 * This function uses the built-in sort method and sorts the array.
 */
function sortArray(arr) {
  console.log("Original array", arr);
  const sortedArray = arr.sort();
  console.log("Sorted array", sortedArray);
}
sortArray([0, 3, 8, 7, 6, 5, -4, 3, 2, 1, 3, 2, 5, 10, 2, 3, 4]);

/**
 * Exercise-16
 */
function exercise16() {
  /**
   *  mergeRemoveDuplicate
   * It takes two array and with help of concat it merges them into one(using concat method) and then call the removeDuplicates function with the merged array as arguments.
   * @param {*} arrOne First array we want to merge.
   * @param {*} arrTwo Second array we want to merge.
   */
  function mergeRemoveDuplicate(arrOne, arrTwo) {
    console.log("TWO ARRAYS ARE ", arrOne, " and ", arrTwo);
    const mergedArray = arrOne.concat(arrTwo);
    console.log("Merged array is ", mergedArray);

    const duplicateFreeArray = removeDuplicates(mergedArray);
    console.log("Duplicate free merged array ", duplicateFreeArray);
  }
  const arrOne = [0, 3, 8, 7, 6, 5, -4, 3, 2, 1, 3, 2, 5, 10];
  const arrayTwo = [2, 1, 4, 7, 0, 0, 100, 100, 0, 2, 5];
  mergeRemoveDuplicate(arrOne, arrayTwo);
}
exercise16();

/**
 * Exercise-17
 * convertUnixToTime
 *  This function has a unixTimeStamp  and it convert it to time and logs the value.
 */
function convertUnixToTime() {
  const unix_timestamp = Math.floor(Date.now());
  // const unix_timestamp =10637282H;
  let currentDate = new Date(unix_timestamp);
  let time = currentDate.toLocaleTimeString();
  console.log(time);
}
convertUnixToTime();

/**
 * Exercise-18
 * getDays
 * This function take two arguments month and year, firstly it convert the month string to lowercase then checks that the month contains 31 or 30 days and for february it checks that the year entered by user is leap year or not if it is leap year then february has 29 days otherwise 28 days.
 * @param {*} month The month user want to get the days of.
 * @param {*} year Used to check that if a year is leap year or not.
 */
function getDays(month, year) {
  const userMonth = month.toLowerCase();
  const allMonths = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

  const monthHas31 = ["january", "march", "may", "july", "august", "october", "december"];

  /**
   * isLeap
   * It checks that the year entered by user is leap year or not
   * @param {*} year
   * @returns It return true if the year is leap and false it the year is not leap year.
   */
  function isLeap(year) {
    if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }

  if (allMonths.includes(userMonth)) {     // The month entered by user should be a valid month.
    if (monthHas31.includes(userMonth)) {  // The month entered by user has 31 days.
      console.log("This month has 31 days.");
    } 
    else if (userMonth === "february") {   // The month entered by user is february.
      if (isLeap(year)) {                  // Check that the year is leap or not.
         console.log("This month have 29 days.");
      }
      else {
         console.log("This month have 28 days.");
      }
    } 
    else {                                 // The month entered by user has 30 days.
      console.log("This month have 30 days");
    }
  } 
  else {                                  // The monthe eneterd by user is not valid month.
      console.log("Please enter valid month name");
  }
}
getDays("february", "2024");

/**
 * Exercise-19
 * compareDates
 *  It takes two dates, then convert them to time(value) by using getTime() and then compare those two values.
 * @param {*} d1 Date 1 which we want to compare.
 * @param {*} d2 Date 2 which we want to compare.
 */
function compareDates(d1, d2) {
  // Create two Date objects
  const firstDate = new Date(d1);
  const secondDate = new Date(d2);

  // Compare the dates directly. JS will convert the dates(milliseconds since january 1,1970) to their respective corresponding timestamps.
  // if (firstDate > secondDate) {
  //   console.log(`${d1} is greater then ${d2}`);
  // } else if (firstDate < secondDate) {
  //   console.log(`${d1} is lesser than ${d2}`);
  // } else {
  //   console.log(`Dates are equal`);
  // }

  // Get the time in milliseconds for each date
  const firstTime = firstDate.getTime();
  const secondTime = secondDate.getTime();
  if (firstTime < secondTime) {           // Compare the time values
    console.log("firstDate is earlier than secondDate");
  } else if (firstTime > secondTime) {
    console.log("firstDate is later than secondDate");
  } else {
    console.log("firstDate and secondDate are Equal");
  }
}
compareDates("06/21/2034", "06/21/2034");

/**
 * Exercise-20
 * getCurrentUrl
 * It gets the url with window.location.href and then creates an object with parameters we need and get their values from window.location object.
 */
function getCurrentUrl() {
  const currentUrl = window.location.href; //Getting current url.
  const parametersObject = {
    //Creating a object with different keys and getting their values from window.location object.
    host: window.location.host,
    hostName: window.location.hostname,
    href: window.location.href,
    origin: window.location.origin,
    pathName: window.location.pathname,
    port: window.location.port,
    protocol: window.location.protocol,
  };
  console.log(currentUrl);
  console.log(parametersObject);
}
getCurrentUrl();

/**
 * Exercise-21
 * detectDevice
 * It gets the width from window.innerWidth and then if the width is less than 600 then we can say that user has opened the website in mobile otherwise desktop.
 */
function detectDevice() {
  const width = window.innerWidth;
  if (width > 600) {
    console.log("The website is opened in Desktop");
  } else {
    console.log("The website is opened in mobile phone");
  }
}
detectDevice();

/**
 * Exercise-22
 * truncateString
 * We use the slice method to truncate the string str.slice(0,length).
 * @param {*} str The string we want to truncate.
 * @param {*} length The length upto which we want to truncate the string
 */
function truncateString(str, length) {
  const truncatedString = str.slice(0, length);
  console.log(truncatedString);
}
truncateString("rahul", 3);

/**
 * Exercise-23
 * combineObjects
 * It has two or more than two object and it combines to them to a single object, it can also be modified easily to take multiple objects as parameters and return a single object.
 * It uses spread operator and Object.assign to combine objects.
 */
function combineObjects() {
  let firstObject = { name1: "Rahul", age1: 20, number1: 34242 };
  let secondObject = { name2: "Anamika", age2: 21, value: 234 };

  let thirdObject = {
    identity: "I'm third Object",
    true: "I guess I'm true",
    nestedObj: {
      name3_a: "nested in thirdObject",
      value3_a: "nested value in obj 3",
    },
  };

  let combinedObject = { ...firstObject, ...secondObject, ...thirdObject };
  // let combinedObject = Object.assign(firstObject,secondObject,thirdObject)
  console.log(combinedObject);
}
combineObjects();

/**
 * Exercise-24
 * tooltipPosition
 * This function creates an div then set its id and class attributes.
 * Then set its content to the value stored in the title attribute of the div above it.
 * When we hover over the icon the div we created is appended into the body and positioned and when we leave the mouse it gets removed from the body.
 */
function tooltipPosition() {
  const tooltipDiv = document.createElement("div");
  tooltipDiv.setAttribute("class", "price_tooltip absolute");
  tooltipDiv.setAttribute("id", "tooltip_div");

  const tooltipWrapper = document.querySelector(".price_icon_wrapper");
  const tooltipIcon = document.querySelector(".tooltip_icon");
  const tooltipText = document.querySelector(".tooltip_text");
  const tooltipTitle = tooltipText.getAttribute("title");

  // Function to calculate and update tooltip position
  function updateTooltipPosition() {
    const position = tooltipWrapper.getBoundingClientRect();
    const tooltipDivHeight = tooltipDiv.offsetHeight;
    tooltipDiv.style.left = `130px`;
    // Determine tooltip position
    if (position.top < tooltipDivHeight) {
      // Position tooltip below the icon if there's enough space at the top
      tooltipDiv.style.top = `${tooltipWrapper.offsetHeight + 5}px`;
      // tooltipDiv.style.left = `${tooltipWrapper.offsetWidth / 2 - tooltipDiv.offsetWidth / 2}px`;
    } else {
      // Position tooltip above the icon if not enough space at the top
      tooltipDiv.style.top = `-${tooltipDivHeight + 5}px`;
      // tooltipDiv.style.left = `${tooltipWrapper.offsetWidth / 2 - tooltipDiv.offsetWidth / 2}px`;
    }
  }
  tooltipIcon.addEventListener("mouseenter", () => {
    tooltipWrapper.append(tooltipDiv);
    tooltipDiv.innerText = tooltipTitle;
    tooltipText.removeAttribute("title");
    tooltipDiv.style.display = "block";
    updateTooltipPosition(); // Update position on mouse enter
  });

  tooltipIcon.addEventListener("mouseleave", () => {
    tooltipText.setAttribute("title", tooltipTitle);
    tooltipDiv.style.display = "none";
    tooltipDiv.remove();
  });

  window.addEventListener("scroll", updateTooltipPosition);
  window.addEventListener("resize", updateTooltipPosition); // Recalculate on resize
}
tooltipPosition();
/**
 * Exercise-25
 * threeLevelDropdown
 * Firstly, it select all the elements which has the class js_has_drop_down.
 * Then it places click event listener on every single element and in every single element it select the first ul and if the ul contains dropdown_visible class it removes it with the help of (closeNestedDropdowns function) and if it does not contain the dropdown_visible class it adds it.
 */
function threeLevelDropDown() {
  const dropDowns = document.querySelectorAll(".js_has_drop_down");

  dropDowns.forEach((dropDown) => {
    dropDown.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const nestedDropDown = dropDown.querySelector("ul");
      const isVisible = nestedDropDown.classList.contains("dropdown_visible");
      const dropDownIcon = dropDown.querySelector("a i");

      if(isVisible){  
         closeNestedDropDowns(dropDown);
      }
      else{  
         nestedDropDown.classList.add("dropdown_visible");
         dropDownIcon.classList.add("rotate");
      }
    });
  });
  function closeNestedDropDowns(element) {
    const nestedDropDowns = element.querySelectorAll("ul");
    nestedDropDowns.forEach((dropDown) => {
      dropDown.classList.remove("dropdown_visible");
      dropDown.parentElement.querySelector("a i").classList.remove("rotate")
    });
  }
}
threeLevelDropDown();

/**
 * Exercise-26
 * toggleSidebar
 * It select the childrens(all buttons which are inside the div which has id drawer-btns).
 * It adds click event listener to every button, and then when any button is clicked firstly it removes any other class which affects the position of the sidebar then add the class from the value of dataset.side attribute of the clicked button.
 * Then it also enables the overlay.
 * We also use stopPropagation so that when we click on the button, the event listener added on overlay should not work.
 */
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar_wrapper");
  const sidebarControlBtns = document.getElementById("drawer-btns").children;
  const overlay = document.querySelector(".main_content");

  for (const btn of sidebarControlBtns) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      sidebar.classList.remove(
        "sidebar_right_in",
        "sidebar_left_out",
        "sidebar_top",
        "sidebar_bottom",
        "sidebar_left_in"
      );
      sidebar.classList.add(btn.dataset.side);

      // To add and remove overlay.
      overlay.classList.add("overlay");
      // handleOverlayAndPopUpClose is a utility function defined at the top of the file.
      overlay.addEventListener("click", handleOverlayAndPopUpClose);
    });
  }
}
toggleSidebar();

/**
 * Exercise-27
 * togglePopUp
 * This function places a event listener on the popUp button which has class popUp_btn and defines a function which will define that what should happen when the popUp button will be clicked.
 */
function togglePopUp() {
  /**
   * popUpBtnHandler
   * This function handle the click event on the popUp button.
   * It selects all the element which should close the popUp when clicked, and then place a click even listener on every individual item and hides the popUp when any of them is clicked.
   * It also adds overlay when the popUp is opened, and removes it when the popUp is closed.
   * @param {*} e It is required to use stopPropagation method.
   */
  function popUpBtnHandler(e) {
    e.stopPropagation();
    const popUpClose = document.querySelectorAll(".popup_close");
    const popUpBox = document.querySelector(".popup_container");
    const overlay = document.querySelector(".main_content");

    overlay.classList.add("overlay");
    popUpBox.classList.toggle("popup_invisible");

    //Handles closing of popUp and removing overlay.
    popUpClose.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        overlay.classList.remove("overlay");
        popUpBox.classList.add("popup_invisible");
        popUpBox.classList.remove("popup_visible");
      });
    });
    overlay.addEventListener("click", handleOverlayAndPopUpClose);
  }

  const popUpBtn = document.querySelector(".popUp_btn");
  popUpBtn.addEventListener("click", popUpBtnHandler);
}
togglePopUp();

/**
 * exercise28
 * It basically defines and calls two function which are responsible for opening and closing of the pop-ups
 */
function exercise28() {
  /**
   * openModals
   * It contains two function which are responsible for opening the modal edit-Template and modal ShortCode
   */
  function openModals() {
    /**
     * openModalShortCode
     * This function basically selects the insert button inside the first pop-up(name-Template and places a click event listener on it and then when the button is clicked it opens a new pop-up(short-code)).
     */
    function openModalShortCode() {
      const popUpTemplate = document.querySelector(".popup_container_template");
      const toggleBtn = popUpTemplate.querySelector(".insert_btn");
      const popUpTwo = document.querySelector(".popUpTwo_container");
      const overlay = document.querySelector(".main_content");

      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        popUpTwo.classList.remove("popup_invisible");
        popUpTwo.classList.add("popup_visible");
        overlay.classList.add("overlay");
      });
      overlay.addEventListener("click", handleOverlayAndPopUpClose);

    }
    openModalShortCode();

    /**
     * openModalEditTemplate
     * This function select all the rows on which we want to place an click event listener, then it places the event listener and manage overlay and calls a function which will displaythe first popUp(edit-template).
     */
    function openModalEditTemplate() {
      const tableRowName = document.querySelectorAll(".sms-template_table_row .sms-template_row_name");
      const popUpTemplate = document.querySelector(".popup_container_template");
      const overlay = document.querySelector(".main_content");

      tableRowName.forEach((element) => {
        element.addEventListener("click", (e) => {
          e.stopPropagation();
          popUpTemplate.classList.remove("popup_invisible");
          popUpTemplate.classList.add("popup_visible");
          overlay.classList.add("overlay"); //Overlay will be added when the popUp is opened.
        });
      });
    }
    openModalEditTemplate();
  }
  openModals();

  /**
   * closeModals
   * It contains two function which are responsible for closing of the modal-nameTemplate and modal-ShortCode
   */
  function closeModals() {
    /**
     * closeModalShortCode
     * This function places an event listener on insert short codes button, and controls the visibility of short codes table popup by adding class popup_visible to it and removing class popup_invisible(default) from it.
     */
    function closeModalShortCode() {
      const popUpTwo = document.querySelector(".popUpTwo_container");
      const closeBtn = popUpTwo.querySelector(".popUpTwo_close_btn");

      closeBtn.addEventListener("click", (e) => {
        popUpTwo.classList.remove("popup_visible");
        popUpTwo.classList.add("popup_invisible");
      });
    }
    closeModalShortCode();

    /**
     * closeModalEditTemplate
     * This function select all the rows on which we want to place an click event listener, then it places the event listener and manage overlay and calls a function which will remove the first popUp(edit-template).
     */
    function closeModalEditTemplate() {
      const popUpTemplate = document.querySelector(".popup_container_template");
      const popUpTemplateCloseButtons = document.querySelectorAll(".popUp_template_close");
      const overlay = document.querySelector(".main_content");
      popUpTemplateCloseButtons.forEach((element) => {
        //All elements which can close the popUp when we click on them.
        element.addEventListener("click", (e) => {
          e.stopPropagation();
          popUpTemplate.classList.add("popup_invisible");
          popUpTemplate.classList.remove("popup_visible");
          overlay.classList.remove("overlay"); //Overlay will be removed when the popUp is closed.
        });
      });
    }
    closeModalEditTemplate();
  }
  closeModals();
}
exercise28();

/**
 * Exercise-29
 * printStarPyramid
 * This function prints star pyramid patterns.
 * We use a for loop and as many rows we want to print we'll run it as many items and with each iteration it print a new line and it consist two more loop inside it.
 * The first loop inside the outer for loop is used to print the spaces, we runs if from j = 0 till j < 2*(rows-i)-1.
 * The second loop inside the outer for loop is used to print the *, we runs it from k = 0 till k < 2*i+1.
 */
function printStarPyramid(rows) {
  const starContainer = document.querySelector(".star_pattern");
  let spaces = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < 2 * (rows - i) - 1; j++) {
      // process.stdout.write(" ");                     //For NODE-Js
      spaces = spaces.concat(" ");
      starContainer.innerHTML += "#";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      // process.stdout.write("* ");                    //For NODE-JS
      spaces = spaces.concat("* ");
      starContainer.innerHTML += " * ";
    }
    // process.stdout.write("\n");                      //For NODE-JS
    spaces = spaces.concat("\n");
    starContainer.innerHTML += " <br>";
  }
  console.log(spaces);
}
printStarPyramid(9);

/**
 * Exercise-30
 * dropdownForm
 * This function open a drop down when clicked on the button named Open DropDown and also closes it if we click again.
 * Then inside the drop-down list if we click on the last element a sign-in form is also opened and if we click on it again the sign-in form will hide.
 * In the sign-in form if we click on the sign-in button the form will hide and clear the values if the chekbox is not checked.
 */
function dropdownForm() {
  const dropDownBtn = document.getElementById("open_form_drop-down");
  const dropDownForm = document.querySelector(".dropdown_form");
  const signInBtn = document.getElementById("sign_in");
  const checkbox = dropDownForm.querySelector("#check-box");

   /**
    * clearValues
    * This function clear the form fields when user click on the sign-in button.
    */
   function clearValues(){
      dropDownForm.querySelector("#mail").value = null;
      dropDownForm.querySelector("#pwd").value = null;
   }

   dropDownBtn.addEventListener("click", () => {
      dropDownForm.classList.toggle("form_invisible");
   });

   signInBtn.addEventListener("click", () => {
      dropDownForm.classList.add("form_invisible");
      if(!(checkbox.checked)){
         clearValues();
      }
   });
}
dropdownForm();

/**
 * exercise31
 * It calls a function named newArrayGivenValue and logs the result.
 */
function exercise31() {
  /**
   * newArrayGivenValue
   * This function takes two parameter size and value and create a new array of defined size, and then push the value inside the array.
   * @param {*} size The size we want to create an array of.
   * @param {*} value The value with which we want to fill the array.
   * @returns It return an array of specified size with specified values filled inside it.
   */
  function newArrayGivenValue(size, value) {
    let newArray = [];
    for (let i = 0; i < size; i++) {
      newArray.push(value);
    }
    return newArray;
  }
  const returnedArray = newArrayGivenValue(3, "a");
  console.log(returnedArray);

  //   way-2 using fill method.
  //   function createArray(length, value) {
  //     let arr = new Array(length);
  //     arr.fill(value);
  //     console.log(arr);
  //   }
  //   createArray(3, "a");
}
exercise31();

/**
 * exercise32
 * It calls a function named reverseArray and logs the result.
 */
function exercise32() {
  /**
   * reverseArray
   *  This function takes an array and uses the in-built reverse function on it and reverse the array.
   * @param {*} array The array we want to reverse.
   * @returns The reversed array.
   */
  function reverseArray(array) {
    return array.reverse();
  }

  const reversedArray = reverseArray([1, 2, 3]);
  console.log(reversedArray);
}
exercise32();

/**
 * exercise33
 * It calls a function named clearUnnecessaryElements and logs the result.
 */
function exercise33() {
  /**
   * clearUnnecessaryElements
   * This function takes an array and clear all the unwanted elements(0,false,undefined,empty string,null) with the help of filter.
   * @param {*} arr The array from which we want to remove the unwanted elements.
   * @returns Return the filtered array.
   */
  function clearUnnecessaryElements(arr) {
    return arr.filter((val) => val);
  }

  const clearedArray = clearUnnecessaryElements([0,3,5,1,false,2,undefined,"",3,null]);
  console.log(clearedArray);
}
exercise33();

/**
 * exercise34
 * It calls a function named createObjectFromArray and logs the result.
 */
function exercise34() {
  /**
   * createObjectFromArray
   * It uses Object.assign() tc create the object from array.
   * @param {*} arr The array from which we want to create the object.
   * @returns The object created from array.
   */
  function createObjectFromArray(arr) {
    let obj = Object.fromEntries(arr);
    return obj;
  }
  const createdObject = createObjectFromArray([["a", 1],["b", 2]]);
  console.log(createdObject);
}
exercise34();

/**
 * exercise35
 *  It calls a function named arrayWithoutListedValues and logs the result.
 */
function exercise35() {
  /**
   * arrayWithoutListedValues
   * @param {*} arr Holds the array from which we have to remove the values.
   * @param {*} values Holds the values which we have to remove.
   * @returns It returns an array without the listed values.
   */
  function arrayWithoutListedValues(arr, ...values) {
    // If values are not an array.
    const newValues = [];
    newValues.push(values);
    const finalValues = newValues.flat(Infinity);

    let intersection = arr.filter((x) => !finalValues.includes(x));
    // If we want we can even remove the duplicates.
    return intersection;
  }

  const newArray = arrayWithoutListedValues([1, 2, 3, 4, 1, 2], [1, 2]);
  console.log(newArray);
}
exercise35();

/**
 * exercise36
 * It calls a function named removeDuplicates and logs the result.
 */
function exercise36() {
  const arr = [1, 4, 2, 2, 1, 3, 1, 2, 9, 90, 90, 70, 80, 70];
  const withoutDuplicates = removeDuplicates(arr);
  console.log(withoutDuplicates);
}
exercise36();

/**
 * exercise37
 * It calls a function named compareTwoArrays and logs the result.
 */
function exercise37() {
  /**
   * compareTwoArrays
   * It takes two array and then compare values of both array at same index and return true if all values are equal otherwise returns false.
   * It compares values of two arrays and tells that if they are equal or not.
   * @param {*} arrOne Holds the first array whose values we want to compare.
   * @param {*} arrTwo Holds the second array whose values we want to compare.
   * @returns return the variable isEqual which holds true if arrays are equal otherwise it holds false.
   */
  function compareTwoArrays(arrOne, arrTwo) {
    let isEqual;
    if (arrOne.length === arrTwo.length) {
      for (let i = 0; i < arrOne.length; i++) {
        if (arrOne[i] === arrTwo[i]) {
         console.log(arrOne[i], arrTwo[i]);
         isEqual = true;
         }
         else{
            isEqual= false;
            return isEqual;
         }
      }
    }
    return isEqual;
  }

  const isEqual = compareTwoArrays([1,2,"4",5], [1,2,"4",5]);
  if (isEqual) console.log("Both Arrays Are Equal");
  else console.log("Arrays Are Not Equal");
}
exercise37();

/**
 * exercise38
 * It calls a function named deepToPlainArray and logs the result.
 */
function exercise38() {
  /**
   * deepToPlainArray
   * This function basically flats a deep nested array by using flat method.
   * @param {*} arr The array we want to flat.
   * @returns It returns the array after flattening it.
   */
  function deepToPlainArray(arr) {
    return arr.flat(Infinity);
  }
  const plainArray = deepToPlainArray([1, 2, [3, 4, [5]]]);
  console.log(plainArray);
}
exercise38();

/**
 * exercise39
 * It calls a function named splitArray and logs the result.
 */
function exercise39() {
  /**
   * splitArray
   * It splits an array into parts of determined size.
   * @param {*} array The array which we want to split.
   * @param {*} partition_size The size of the new created arrays.
   * @returns It return the resulted array.
   */
  function splitArray(array, partition_size) {
    const result = [];
    if (partition_size > 0) {
      for (let i = 0; i < array.length; i += partition_size) {
        result.push(array.slice(i, i + partition_size));
      }
    } 
    else {
      console.log("Partitioning size should be greater than zero.");
      return array;
    }
    return result;
  }

  const splittedArray = splitArray([1, 2, 3, 4, 5], 3);
  console.log(splittedArray);
}
exercise39();

/**
 * exercise40
 * It calls a function named uniqueValue and logs the result.
 */
function exercise40() {
  /**
   * uniqueValue
   * It takes multiple arrays as input and stores them inside a single array.
   * Then it used reduce method on that array and with the help of filter(on acc) it checks that the values inside the acc are available in next array item or not.
   * In last it removes all the duplicates from the acc.
   * @param  {...any} arrays Stores all the arrays in a single array.
   * @returns It return all the unique values which are present in every single array.
   */
  function uniqueValue(...arrays) {
    if (arrays.length == 0) {
      return {};
    }

    let reducedArray = arrays.reduce((acc, array) => {
      let filteredArray = acc.filter((value) => array.includes(value));
      return filteredArray;
    });
    return reducedArray;
  }

  const unique = uniqueValue([1, 2, 4, 5, 9, 10],[2, 3, 1, 4, 9, 1],[2, 9, 1, 4, 1]);
  const uniqueArray = removeDuplicates(unique);
  console.log(uniqueArray);
}
exercise40()
