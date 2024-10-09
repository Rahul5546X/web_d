// To compile into js use--> npm run ts
// To run js use--> npm run js

interface Response{
   response:{
      api_status:number,
      code:number,
      data:string[],
      message:string
   }
}

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
       xhr.setRequestHeader('Local','1HS5whsCV6Tir0nPubePaVQNc6a8Ewcs');
       xhr.onreadystatechange = function () {
         // Tracking the ready states continuosly.
         if (xhr.readyState === 4) {  //It means the operation is complete.
           const apploadData:Response= JSON.parse(this.responseText);
           const response = apploadData?.response;
           console.log(`Requested data is `);
           console.log(response);
         }
      };
       xhr.send();
     } catch (error) {
       console.log("We have a error " + error);
     }
   }
   if(requestBtn){
      requestBtn.addEventListener("click", requestResponeXHR); 
   }
}
getApploadResponseXHR();


interface notEmpty {
   id:number|string,
   name:string,
}

function isArrayNotEmpty(arr:notEmpty[]):boolean{
   if(arr.length>0){
      return true;
   }
   else{
      return false;
   }
}

interface notEmptyObject {
   [index:number]:{
      id:number|string,
      name:string
   }
}
/**
 * This function checks that while destructuring if there is not data available it return an empty object instead of error. 
 */
function destructObj(obj){
   return obj ?? {};
}

/**
 * fetchApploadData
 * It is an async function used to fetch the data from the API.
 * It uses fetch method(GET) with a predefined URL.
 * After fetching the data it destructers the object and then call multiple function with different data(destructured) passed to them.
 */
async function fetchApploadData() {
   const requestUrl = "https://demo1.bookingkoala.co.in/api/v3/appload-new";
   const response = await fetch(requestUrl,
      {
         headers:{
            'Local' : '1HS5whsCV6Tir0nPubePaVQNc6a8Ewcs'
         }
      });
   const apploadData:Response = await response.json();
   const {frequencies, service_category:serviceCategory, extras } = destructObj(apploadData?.response?.data);
   createFrequencyBtn(frequencies);
   servicesSelector(serviceCategory);
   extrasCheckboxes(extras);
}
fetchApploadData();


interface frequency{
   name:string,
   id:number,
   name_different_customer_end:boolean,
   description?:string,
   show_tooltip_icon:boolean,
   occurence_time?:string
}
// interface frequencies extends Array<frequency>{}

/**
 * createFrequencyBtn
 * @param {*} frequencies It is an array of the frequencies we get from the api with the help of fetchAppLoadData function.
 * If the array is not empty then it'll select the button container and loop through the array.
 * In each iteration it creates a button with name(get from array item) and append it to button container and places a event listener on the button.
 * It assigns the active class to the first button.
 * Then when a button is clicked it checks that if any of the button has active class assigned or not(if yes then it remove it) else it places the active class on the clicked button(which makes sures that at a single time there is only one button with active class.)
 */
function createFrequencyBtn(frequencies:frequency[]) {
   
   if(isArrayNotEmpty(frequencies)){
      const btnContainer = document.getElementById("button_container");

      function addActiveTOFirst(){
         const firstBtn = btnContainer?.querySelector(".frequency_btn");
         firstBtn?.classList.add("active");
      }

      function appendBtns(btn:HTMLButtonElement,btnName:string){
         btn.classList.add("frequency_btn");
         btn.innerText = btnName;
         btnContainer?.appendChild(btn);
      }

      function handleBtnActive(btn:HTMLButtonElement){
         const activeBtn = btnContainer?.querySelector(".active");
         activeBtn?.classList.remove("active");
         btn.classList.add("active");
      }

      for (const frequency of frequencies) {          
         try {
            const btnName = frequency?.name;
            const btn = document.createElement("button");
            appendBtns(btn,btnName);
      
            btn.addEventListener("click", () => {
               handleBtnActive(btn)
            });

         } catch (error) {
            console.log("property not available "+error);
         }
      }
      addActiveTOFirst();
   }
   else{
      console.log("There is no data in frequency. The array is empty.");
   }
}

interface ServiceCategory{
   name:string,
   id:string
}
// interface service_category_items extends Array<service_category>{}

/**
* servicesSelector
 * @param {*} serviceCategory It is an array of the serviceCategory we get from the api with the help of fetchAppLoadData function.
 * If the array is not empty then it select the service list element and option element.
 * It loops through the array and with each iteration it gets the name and id from the array item and creates a option element with the values of name and id and append it to the service list.
 * Then it places the event listener (change) on the whole select element and when any of the option is selected we can log it's id.
*/
// function servicesSelector(serviceCategory:service_category[]) {
//    if(isArrayNotEmpty(serviceCategory)){
//       const servicesList = document.querySelector(".js_services_list");
//       const selectedOption = servicesList?.querySelector("select");

//       type serviceElement = {
//          id:string,
//          name:string
//       }

//       function createOptionELement(serviceElement:serviceElement){
//          const serviceName = serviceElement?.name;
//          const serviceId = serviceElement?.id;
//          const optionElement = document.createElement("option");
//          selectedOption?.append(optionElement);
//          optionElement.setAttribute("value", serviceId);
//          optionElement.innerText = serviceName;
//       }

//       for (const serviceElement of serviceCategory) {
//          try {
//                createOptionELement(serviceElement)
//          } 
//          catch (error) {
//             console.log("property not available "+error);
//          }
//       }

//       selectedOption?.addEventListener("change", (event) => {
//          let selectedOptionId = (<HTMLOptionElement>event.target).value;
//          console.log("The selected service has id " + selectedOptionId);
//       });
//    }
//    else{
//       console.log("There is no data in service_category");
//    }
// }
function servicesSelector(serviceCategories: ServiceCategory[]) {
   if (isArrayNotEmpty(serviceCategories)) {
       const servicesList = document.querySelector(".js_services_list");
       const selectElement = servicesList?.querySelector("select");

       if (selectElement) {
           populateSelectOptions(selectElement, serviceCategories);
           attachChangeEvent(selectElement);
       } else {
           console.log("Select element not found.");
       }
   } else {
       console.log("There is no data in serviceCategories.");
   }
}

function populateSelectOptions(selectElement: HTMLSelectElement, serviceCategories: ServiceCategory[]) {
   serviceCategories.forEach((serviceCategory) => {
       const optionElement = createOptionElement(serviceCategory);
       selectElement.append(optionElement);
   });
}

function createOptionElement(serviceCategory: ServiceCategory): HTMLOptionElement {
   const optionElement = document.createElement("option");
   optionElement.value = serviceCategory.id;
   optionElement.innerText = serviceCategory.name;
   return optionElement;
}

function attachChangeEvent(selectElement: HTMLSelectElement) {
   selectElement.addEventListener("change", (event) => {
       const selectedOptionId = (event.target as HTMLOptionElement).value;
       console.log("The selected service has id " + selectedOptionId);
   });
}

interface extras{
   name:string,
   id:string
}
// interface extras_items extends extras{}

/**
 * extrasCheckboxes
 * @param {*} extras It is an array of the extras we get from the api with the help of fetchAppLoadData function.
 * If the array is not empty it loops through the whole array and for every iteration create a checkbox and append it to the checkbox list.
 * Then it selects all the chekboxes and add a event listener on every single checkbox which will check that if the checkbox if checked add its id to the array and if it is unchecked remove the id from the array.
 * At the end we have an array which will have all the id's of checked checkboxes.
 */
function  extrasCheckboxes(extras:extras[]) {
   /**
   * removeId
   * It takes the array and the id and using splice removes the id with the help of slice method.
   */
   function removeId(arr:string[],id:string){
      const index = arr.indexOf(id);
      if(index > -1){
         arr.splice(index,1);
      }
   }

   /**
    * createCheckbox
    * This function create all the required elements we need and add them dynamically.
    * It also places an event listener on the checkbox so that when the checkbox is checked we can store its id in an array and if it is unchecked we can remove its id.
    */
   function createCheckbox(extrasId:string,extrasName:string,checkedArray:string[]){
      const checkboxesList = document.querySelector(".extras_checkboxes_list");
      const list = document.createElement("li");          
      const inputCheckbox = document.createElement("input");      
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
      if(checkboxesList){
         checkboxesList.appendChild(list);
      }
     
      inputCheckbox.addEventListener("change",(event)=>{
         event.stopPropagation();
         // Non-null assertion operator
         const checkboxID = inputCheckbox.getAttribute("id")!;
         const checkbox = (<HTMLInputElement>event.target).checked;
         if(checkbox){
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
      const checkedArray:string[] = [];      // It'll hold the id's of the checked checkboxes.
      for (const extra of extras) {
         try {
            const extrasId:string = extra?.id;
            const extrasName:string = extra?.name;
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
 * formEmptyFieldValidator
 * This function validates performs multilple validation on input fields if any of the input field is not valid it adds a warning message to the body dynamicallly.
 */
interface emptyOrSpecial{
   (inputValue:string,
   fieldName:string,
   fieldContainer:HTMLElement): boolean
}

function formValidator(event:Event) {
   event.preventDefault();
   let isValid = true;
 
   const nameContainer = document.getElementById("nameContainer")!;
   const mailContainer = document.getElementById("mailContainer")!;
   const reviewContainer = document.getElementById("reviewContainer")!;
 
   const userName = (document.getElementById("userName") as HTMLInputElement)?.value.trim();
   const userMail = (document.getElementById("userMail")as HTMLInputElement)?.value.trim();
   const userReview = (document.getElementById("userReview")as HTMLInputElement)?.value.trim();
 
   // Clear previous error messages
   document.querySelectorAll(".error").forEach(error => error.remove());

   /**
    * showError
    * It creates a span and set it's innerText to the message and assigns it class error it gets and then append it to the field it gets.
    * @param {*} field Where we want to append the error.
    * @param {*} message What we want to show inside error.
    */
   function showError(field:HTMLElement, message:string) {
      const errorSpan = document.createElement("span");
      errorSpan.className = "error";
      errorSpan.innerHTML = message;
      field.appendChild(errorSpan);
   }

   /**
 * isFieldEmpty
 * It checks that if any input field is empty or not by checking the length.
 * If the field is empty it calls the showError.
 * @param {*} inputValue The value whom length we want to check.
 * @param {*} fieldName The name of the field which will be used in error message.
 * @param {*} fieldContainer The container where should be the error message appended.
 * @returns True(If Empty) otherwise false.
 */
   let isFieldEmpty:emptyOrSpecial;
   isFieldEmpty = function (inputValue, fieldName, fieldContainer) {
      if (inputValue.length === 0) {
            showError(fieldContainer, `${fieldName} cannot be empty.`);
            return true;
      }
      return false;
   }

   /**
 * hasSpecialCharacters
 * It has a regex and it compares the input value to the regex.If it matches then it return true and calls the showError function.
 * @param {*} inputValue The value which we want to check that it contains special characters or not.
 * @param {*} fieldName The name of the field which will be used in error message.
 * @param {*} fieldContainer The container where should be the error message appended.
 * @returns True(If value has special chars) otherwise false.
 */
   let hasSpecialCharacters:emptyOrSpecial;
   hasSpecialCharacters = function (inputValue, fieldName, fieldContainer){
      const specialChars = /[!`@#$%^&*()+=\-[\]\\';,/{}|\\":<>?~_]/;
      if (specialChars.test(inputValue)) {
         showError(fieldContainer, `${fieldName} cannot contain special characters.`);
         return true;
      }
      return false;
   }

   /**
 * emailValidator
 * It has a regex which checks the email input value for basic validation(position of @ and .);
 * @param {*} email The email we want to check.
 * @returns True(if mail format is valid) otherwise false.
 */
   function emailValidator(email:string):boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let isValidMail = emailRegex.test(email);
      return isValidMail;
   }

   /**
    * printValues
    * console log all the values if form is valid
    */
   function printValues() {
      console.log(`Name is ${userName} and e-mail is ${userMail} and review is "${userReview}"`);
   }

   /**
    * clearValues
    * Clears all the input fields.
    */
   function clearValues(){
   const form = <HTMLFormElement>document.getElementById("myForm");
   form.reset();
   }

   // Validating Name
   if(isFieldEmpty(userName,"Name",nameContainer)){
      isValid = false;
   }
   else{
      if(hasSpecialCharacters(userName,"Name",nameContainer)){
         isValid = false;
      }
   }

   // Validating E-mail
   if (isFieldEmpty(userMail, "Email", mailContainer)) {
      isValid = false;
   }else if(!emailValidator(userMail)) {
      showError(mailContainer, "Invalid email format. The format should be abc@gmail.com ");
      isValid = false;
   }

   // Validating Review
   if(isFieldEmpty(userReview, "Review", reviewContainer)){
      isValid = false;
   }else{
      if(hasSpecialCharacters(userReview, "Review", reviewContainer)){
         isValid = false;
      }
   }

   if (isValid) {
      printValues();
      clearValues();
   }
}
document.getElementById("myForm")?.addEventListener("submit", formValidator);

/**
 * getDateTime
 * This function select the element with class clock.
 * Then with the help of setInterval and Date it takes the current date and convert it to locale string.
 * Then changes the innerText of the selected element to the date converted into locale string.
 * It repeats this process every second.
 */
function getDateTime() {
   const clockContainer = document.querySelector(".js_clock");
   if(clockContainer){
      setInterval(() => {
        const currentDate = new Date();
        clockContainer.innerHTML = currentDate.toLocaleString();
      }, 1000);
   }
}
getDateTime();

/**
 * setIconPosition
 * It select a element with class named chat-icon-wrapper.
 * Then applies some style to it.
 * It also creates a orange circle and places it at right top of the icon wrapper.
 */
function setIconPosition() {
   const chatIcon = document.querySelector(".chat_icon_wrapper") as HTMLElement;
   if(chatIcon){
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
 
}
setIconPosition();


/**
 * btnColorHandler
 * It selects the wrapper of button and text and button wrapper.
 * Then we have a array of buttons.
 * We loop through the array and for each iteration we create an button and set its innerText and data-color attribute to the valu we get from array and places an event listener on the button.
 * When the button is clicked we add a active class to it and changes the border of the button wrapper and color of button to the color value that we get from the data-color attribute of the button.
 * We make sure that at a single time only one button is active.
 */
function btnColorHandler() {
   const btnTextWrapper = document.querySelector(".js_button_text_wrapper");
   const btnWrapper = document.querySelector(".buttons_wrapper") as HTMLElement;
   const btnArray = ['red','yellow','green','blue'];  //We can add multiple buttons easily.
   const selectedBtnInfo = document.createElement("p");

   /**
    * It set the background color, color, border of button wrapper and innerText.
    * @param {*} button The button whom styles we want to change.
    * @param {*} color The value of color.
    */
   function setStyles(button:HTMLButtonElement,color:string){
      button.style.backgroundColor = color;
      button.style.color = "white";
      if(btnWrapper){
         btnWrapper.style.border = `1px solid ${color}`;
         selectedBtnInfo.innerText = `${color} button is clicked`;
         selectedBtnInfo.style.color = `${color}`;
      }
   }

   /**
    * removeActiveStyles
    * It removes the style from buttonwrapper and reset the text.
    */
   function removeActiveStyles(){
      btnWrapper.style.border = "";
      selectedBtnInfo.innerText = "No Button is selected.";
      selectedBtnInfo.style.color = "black";
   }

   btnArray.forEach((color)=>{
      const button = document.createElement("button");
      button.setAttribute("data-color",color);
      button.innerText = color;
      btnWrapper.appendChild(button);

      button.addEventListener("click", (e) => {
         e.stopPropagation();
         // Non-Null assertion operator
         const color = (<HTMLElement>e.target)?.getAttribute("data-color")!;
         const previouslyActive = btnWrapper.querySelector(".active")as HTMLElement;

         if(previouslyActive){
            previouslyActive.classList.remove("active");
            previouslyActive.style.backgroundColor = "";
            previouslyActive.style.color = "";
            removeActiveStyles();
         }

         if((previouslyActive !== button)){
            button.classList.add("active");
            setStyles(button,color);
         }
      })
   })

   selectedBtnInfo.innerText = "No Button is selected.";
   btnTextWrapper?.appendChild(selectedBtnInfo);
}
btnColorHandler();


/**
 * handleAccordianVisibility
 * It selects the wrapper of accordion and all the buttons that are inside the accordion.
 * Then it loops through all the buttons and places an event listener on every single buttton.
 * When a button is clicked it checks that if there exist any accordion item with class active or not.If it finds such item it remove the active class from it and assign the active class to the accordion item whose button was clicked.
 */
function handleAccordionVisibility() {
   // Non-null assertion operator
   const accordionWrapper = document.querySelector(".custom_accordion")!;
   const accordionToggleBtns = accordionWrapper?.querySelectorAll(".accordion_heading button")!;

   accordionToggleBtns.forEach((btn)=>{
      btn.addEventListener("click",(e)=>{
         e.stopPropagation();
         const accordionItem = btn.parentElement!.parentElement!;
         const previouslyActive = accordionWrapper.querySelector(".active");

         if(previouslyActive){
            previouslyActive.classList.remove("active");
         }
      
         if((previouslyActive !== accordionItem)){
            accordionItem.classList.add("active");
         }
      });
   });

}
handleAccordionVisibility();


/**
 * tooltipPosition
 * This function creates an div then set its id and class attributes.
 * Then set its content to the value stored in the title attribute of the div above it.
 * When we hover over the icon the div we created is appended into the body and positioned and when we leave the mouse it gets removed from the body.
 * The tooltip is also positioned with the use of getBoundingClientRect method.
 * We set the top and left values such that it always stays in viewport.
 */
function tooltipPosition() {
   const tooltipDiv = document.createElement("div");
   tooltipDiv.setAttribute("class", "price_tooltip absolute");
   tooltipDiv.setAttribute("id", "tooltip_div");
   tooltipDiv.style.width = "200px";

   const tooltipWrapper = document.querySelector(".price_icon_wrapper");
   const textIconWrapper = tooltipWrapper?.querySelector(".js_text_icon_wrapper") as HTMLElement;
   const tooltipText = tooltipWrapper?.querySelector(".tooltip_text");
   // Non-null assertion operator
   const tooltipTitleValue = tooltipText?.getAttribute("title")!;

  /**
   * updateTooltipPosition
   * This function performs the calculation needed to set the top and left of tooltip such that it always stays in viewport.
   * It uses getBoundingClientRect method.
   * It decides that tooltip should be places at bottom of the textIconWrapper or above it, on left side of it or right side of it.
   */
   function updateTooltipPosition() {
      const position = textIconWrapper.getBoundingClientRect();
      const tooltipDivHeight = tooltipDiv.offsetHeight;
      const tooltipDivWidth = tooltipDiv.offsetWidth;

      // set above or below
      if (position.top < tooltipDivHeight) {   //below
         tooltipDiv.style.top = `${textIconWrapper.offsetHeight + 20}px`;
      }
      else {   //above
        tooltipDiv.style.top = `-${tooltipDivHeight-10}px`;
      }

      // left and right 
      if(position.right < window.innerWidth/2 ){
         tooltipDiv.style.left = `${position.left +20}px`;
      }
      else{
        tooltipDiv.style.left = `${position.left - tooltipDivWidth + textIconWrapper.offsetWidth}px`;
      }
   }

   textIconWrapper.addEventListener("mouseenter", () => {
      textIconWrapper.append(tooltipDiv);
      tooltipDiv.innerText = tooltipTitleValue;
      tooltipText?.removeAttribute("title");
      tooltipDiv.style.display = "block";
      updateTooltipPosition(); 
   });

   tooltipWrapper?.addEventListener("mouseleave", () => {
      tooltipText?.setAttribute("title", tooltipTitleValue);
      tooltipDiv.style.display = "none";
      tooltipDiv.remove();
   });

   window.addEventListener("scroll", updateTooltipPosition);
   window.addEventListener("resize", updateTooltipPosition);
}
tooltipPosition();

/**
 * threeLevelDropdown
 * It selects all the items which have dropdown inside them and then it loops through all the items.
 * With each iteration it places an event listener on the item and then select the dropdown inside it then checks that if the selected dropdown conatins visible class or not.If it is visible by default then it hides and otherwise add visible class to the selected dropdown and rotate its icon.
*/
function threeLevelDropDown() {
   const dropDowns = document.querySelectorAll(".js_has_drop_down");
 
   dropDowns.forEach((dropDown) => {
     dropDown.addEventListener("click", (e) => {
       e.preventDefault();
       e.stopPropagation();
 
      // Non-null assertion
       const nestedDropDown = dropDown.querySelector("ul")!;
       const isVisible = nestedDropDown.classList.contains("dropdown_visible");
       const dropDownIcon = dropDown.querySelector(".dropdown_icon")!;
 
       if(isVisible){  
          closeNestedDropDowns(dropDown);
       }
       else{  
          nestedDropDown.classList.add("dropdown_visible");
          dropDownIcon.classList.add("rotate");
       }
     });
   });
   /**
    * It gets an element and closes all the dropdown inside it.
    * @param {*} element The elements inside which we want to close all the dropdowns.
    */
   function closeNestedDropDowns(element:Element) {
     const nestedDropDowns = element.querySelectorAll("ul");
     nestedDropDowns.forEach((dropDown) => {
       dropDown.classList.remove("dropdown_visible");
       dropDown.parentElement?.querySelector(".dropdown_icon")?.classList.remove("rotate")
     });
   }
}
threeLevelDropDown();
 

/**
 * overlayManager
 * It selects the element on which we want to place the event listener to close the overlay and calls the handleOverlayAndPopUpClose function.
 */
function overlayManager() {
   const mainContent = document.querySelector(".main_content")!;
 
    /**
    * closeSidebar
    * It checks that sidebar is visible or not.
    * If the sidbar is active then it hides it and remove the overlay.
    */
    function closeSidebar() {
      // Non-Null assertion operator
      const sidebar = document.querySelector(".sidebar_wrapper")!;
      const sidebarButtons = document.getElementById("drawer-btns")!.children;

      if (sidebar.classList.contains("sidebar_active")) {
         for (const btn of sidebarButtons) {
            // Non-null assertion operator
            const button= <HTMLElement>btn!;
            const className= <string>button.dataset.side;
            sidebar.classList.remove(className);
         }
         sidebar.classList.add("sidebar_left_out");
         sidebar.classList.remove("sidebar_active");
         removeOverlay();
      }
   }

    /**
    * closeCreateAudiencePopup
    * It checks that createAudiencePopup is visible or not.
    * If the sidbar is active then it hides it and remove the overlay.
    */
    function closeCreateAudiencePopup() {
       const createAudiencePopUp = document.querySelector(".popup_container")!;
 
       if (createAudiencePopUp.classList.contains("popup_visible")) {
          createAudiencePopUp.classList.add("popup_invisible");
          createAudiencePopUp.classList.remove("popup_visible");
          removeOverlay();
       }
    }
 
   /**
    * closeShortCodesEditTemplatePopup
    * It checks that whether the editTempaltePopup and shortCodesPopup are visible or not.
    * If both of them are visible so if we click on the overlay only shortCodesPopup will hide and editTemplatePopup will still be visible to close that we can click again on the overlay and it'll be closed and overlay will be removed.
    */
    function closeShortCodesEditTemplatePopup() {
       const shortCodesPopUp = document.querySelector(".js_short_code_popup")!;
       const editTemplatePopUp = document.querySelector(".js_edit_template_popup")!;
 
       if((shortCodesPopUp.classList.contains("popup_visible"))&&(editTemplatePopUp.classList.contains("popup_visible"))){
       shortCodesPopUp.classList.remove("popup_visible");
       shortCodesPopUp.classList.add("popup_invisible");
       }
       else if(editTemplatePopUp.classList.contains("popup_visible")){
       editTemplatePopUp.classList.remove("popup_visible");
       editTemplatePopUp.classList.add("popup_invisible");
       removeOverlay();
    }
    } 
 
   /**
    * handleOverlayAndPopUpClose
    * This function closes all the sidebar,popups when we click on the overlay..
    */
   function handleOverlayAndPopUpClose() {
      closeSidebar();
      closeCreateAudiencePopup();
      closeShortCodesEditTemplatePopup();
   }
 
    mainContent.addEventListener("click", (e) => {
       if (mainContent.classList.contains("overlay")) {
          handleOverlayAndPopUpClose();
       }
   });
}
overlayManager();
 
function addOverlay(){
   const mainContent = document.querySelector(".main_content");
   mainContent?.classList.add("overlay");
}
 
function removeOverlay(){
    const mainContent = document.querySelector(".main_content");
    mainContent?.classList.remove("overlay");
}

/**
 * toggleSidebar
 * It select the childrens(all buttons which are inside the div which has id drawer-btns).
 * It adds click event listener to every button, and then when any button is clicked firstly it removes any other class which affects the position of the sidebar then add the class from the value of dataset.side attribute of the clicked button.
 * Then it also enables the overlay.
 * We also use stopPropagation so that when we click on the button, the event listener added on overlay should not work.
*/
function toggleSidebar() {
   const sidebar = document.querySelector(".sidebar_wrapper");
   const sidebarControlBtns = document.getElementById("drawer-btns")!.children;

   for (const btn of sidebarControlBtns) {
      // Non-null assertion operator
      const button= <HTMLElement>btn!;
      btn.addEventListener("click", (e) => {
      e.stopPropagation();
      sidebar?.classList.remove(
         "sidebar_right_in",
         "sidebar_left_out",
         "sidebar_top",
         "sidebar_bottom",
         "sidebar_left_in"
      );
      const className = <string>button.dataset.side;
      sidebar?.classList.add(className);
      sidebar?.classList.add("sidebar_active");
      addOverlay();
      });
   }
}
toggleSidebar();


/**
 * toggleCreateAudiencePopUp
 * It calls the popUpHandler function when the button with class js_poup_open_btn is clicked.
 */
function toggleCreateAudiencePopUp() {
   const popUpOpenBtn = document.querySelector(".js_popup_open_btn")!;
 
   /**
    * popUpHandler
    * This function handle the click event on the popUp button.
    * It add the class visible to the createAudiencePopupa and adds the overlay.
    * It selects all the element which should close the popUp when clicked, and then place a click even listener on every individual item and hides the popUp when any of them is clicked and also removes the overlay.
    * @param {*} e It is required to use stopPropagation method.
    */
   function popUpHandler(e:Event) {
       e.stopPropagation();
       const popUpCloseBtns = document.querySelectorAll(".popup_close");
       const popUp = document.querySelector(".js_create_audience_popup")!;
 
       popUp.classList.add("popup_visible");
       addOverlay();
 
       //Handles closing of popUp and removing overlay.
       popUpCloseBtns.forEach((closeBtn) => {
          closeBtn.addEventListener("click", (e) => {
             e.stopPropagation();
             popUp.classList.add("popup_invisible");
             popUp.classList.remove("popup_visible");
             removeOverlay();
          });
       });
   }
   popUpOpenBtn.addEventListener("click", popUpHandler);
}
toggleCreateAudiencePopUp();


/**
 * handleTwoPopUps
 * It selects the editTempaltePopUp and shortCodePopUp and define and call the functions to open and close popups.
 */
function handleTwoPopUps() {
   const editTemplatePopUp = document.querySelector(".js_edit_template_popup")!;
   const shortCodePopUp = document.querySelector(".js_short_code_popup")!;

   /**
    * openPopUps
    * It selects all the element which will open the editTemplatePopUp when clicked.
    * When any of the element is clicked it'll open the popup.
    * Similarly it selects all the element which will open the shortCodePopUp when clicked.
    * When any of the element is clicked it'll open the popup.
    */
   function openPopUps() {
      const openEditTemplate = document.querySelectorAll(".sms-template_table_row .sms-template_row_name");
      const openShortCodeBtn = editTemplatePopUp.querySelector(".insert_btn")!;

      /**
       * openPopUpShortCode
       * opens the popup by removing popup_invisible class from it and adding popup_visible class to it.
       */
      function openPopUpShortCode(e:Event) {
         e.stopPropagation();
         shortCodePopUp.classList.remove("popup_invisible");
         shortCodePopUp.classList.add("popup_visible");
      }

      /**
       * openPopUpEditTemplate
       * opens the popup by removing popup_invisible class from it and adding popup_visible class to it.
       */
      function openPopUpEditTemplate(e:Event) {
         e.stopPropagation();
         editTemplatePopUp.classList.remove("popup_invisible");
         editTemplatePopUp.classList.add("popup_visible");
         addOverlay();
      }

      openEditTemplate.forEach((item)=>{
         item.addEventListener("click",openPopUpEditTemplate);
      })

      openShortCodeBtn.addEventListener("click",openPopUpShortCode);
   }

   /**
    * closePopUps
    * It selects all the buttons which will close the editTemplatePopUp when clicked.
    * When any of the buttons is clicked it'll close the popup.
    * Similarly it selects all the element which will close the shortCodePopUp when clicked.
    * When any of the buttons is clicked it'll close the popup.
    */
   function closePopUps() {
      // non-null assertion
      const closeEditTemplateBtns = editTemplatePopUp.querySelectorAll(".popup_template_close")!;
      const closeShortCodeBtn = shortCodePopUp.querySelector(".short_code_popup_close_btn")!;

       /**
       * closePopUp
       * closes the popup by removing popup_visible class from it and adding popup_invisible class to it.
       */
      function closePopUp(popUp:Element){
         popUp.classList.remove("popup_visible");
         popUp.classList.add("popup_invisible");
      }

      closeEditTemplateBtns?.forEach((btn)=>{
         btn.addEventListener("click",()=>{
            closePopUp(editTemplatePopUp);
            removeOverlay();
         })
      })

      closeShortCodeBtn?.addEventListener("click",()=>{
         closePopUp(shortCodePopUp);
      });
   }
   openPopUps();
   closePopUps();
}
handleTwoPopUps();


/**
 * positionDropDownForm
 * This function open a drop down when clicked on the button named Open DropDown and also closes it if we click again.
 * Then inside the drop-down list if we click on the last element a sign-in form is also opened and if we click on it again the sign-in form will hide.
 * In the sign-in form if we click on the sign-in button the form will hide and clear the values if the chekbox is not checked.
 * It also has a function which will decides the position of the form.
 */
function positionDropDownForm() {
   // Non-null assertion operator
   const dropDownBtn = document.getElementById("open_form_drop-down")!;
   const dropDownForm = document.querySelector(".dropdown_form") as HTMLFormElement;
   const signInBtn = document.getElementById("sign_in");
   const checkbox = dropDownForm.querySelector("#check-box") as HTMLInputElement;
 
    /**
     * clearValues
     * This function clear the form fields when user click on the sign-in button.
     */
    function clearValues(){
      dropDownForm.reset();
    }
 
    /**
     * updateFormPosition
     * It decides the position of the form by getting the position of dropDownBtn using getBoundingClientRect method and then deciding the top and left of the form such that it always stay in viewport no matter where the dropDownBtn is placed.
     */
    function updateFormPosition(){
      // Non-null assertion operator
       const position = dropDownBtn?.getBoundingClientRect()!;
       const formHeight = dropDownForm.offsetHeight;
       const formWidth = dropDownForm.offsetWidth;
 
       if (position.top < formHeight) {   //below
          dropDownForm.style.top = `${dropDownBtn?.offsetHeight}px`;
       }
       else {   //above
         dropDownForm.style.top = `-${formHeight-10}px`;
       }
 
       if(position.right < window.innerWidth/2 ){
          dropDownForm.style.left = `${position.left +20}px`;
       }
       else{
         dropDownForm.style.left = `${(position.left - formWidth + dropDownBtn.offsetWidth)-20}px`;
       }
    }
 
    dropDownBtn?.addEventListener("click", () => {
       dropDownForm.classList.toggle("form_invisible");
       dropDownForm.classList.toggle("form_visible");
       updateFormPosition();
    });
 
    signInBtn?.addEventListener("click", () => {
       dropDownForm.classList.add("form_invisible");
       dropDownForm.classList.remove("form_visible");
       if(!(checkbox?.checked)){
          clearValues();
       }
    });
}
positionDropDownForm();


/**
 * swap
 * It takes array and index and then swaps the items present at that index.
 * As we know array are reference type so what we do in swap function will affect the actual array(that's what we need).
 * @param {*} arr The array on which we want to swap the values.
 * @param {*} i First index arr[i] that we want to swap.
 * @param {*} j Second index arr[j] with which we want to swap the value of first index.
 */
function swap(arr:number[], indexOne:number, indexTwo:number) {
   let temperaryVar = arr[indexOne];
   arr[indexOne] = arr[indexTwo];
   arr[indexTwo] = temperaryVar;
}
 
/**
 * removeDuplicates
 * This function remove duplicates from unsorted array and also remove the empty elements if there are any(used in exercise-36 and 40)
 * @param {*} arr The array from which we want to remove the duplicate items.
 * @returns It returns an array without a single duplicate item.
 */
function removeDuplicates(arr:number[]):number[] {
   let emptyArray:number[] = [];
   if (arr.length > 1) {
      return [...new Set(arr)];
   } else {
      return emptyArray;
   }
}

/**
 * Exercise-14
 * removeDuplicates
 * It takes an array and remove the duplicates from it.
 * @param {*} arr The array from which we want to remove the duplicates from.
 */
function removeDuplicatesExercise(arr:number[]) {
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
function sortArray(arr:number[]) {
   console.log("Original array", arr);
   const sortedArray = arr.sort();
   console.log("Sorted array", sortedArray);
}
sortArray([0, 3, 8, 7, 6, 5, -4, 3, 2, 1, 3, 2, 5, 10, 2, 3, 4]);
 

function exercise16() {
   /**
    *  mergeRemoveDuplicate
    * It takes two array and with help of concat it merges them into one(using concat method) and then call the removeDuplicates function with the merged array as arguments.
    * @param {*} arrOne First array we want to merge.
    * @param {*} arrTwo Second array we want to merge.
    */
   function mergeRemoveDuplicate(arrOne:number[], arrTwo:number[]) {
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
 * getDays
 * This function take two arguments month and year, firstly it convert the month string to lowercase then checks that the month contains 31 or 30 days and for february it checks that the year entered by user is leap year or not if it is leap year then february has 29 days otherwise 28 days.
 * @param {*} month The month user want to get the days of.
 * @param {*} year Used to check that if a year is leap year or not.
 */
 function getDays(month:string, year:number) {
   const userMonth = month.toLowerCase();
   const allMonths = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
 
   const monthHas31 = ["january", "march", "may", "july", "august", "october", "december"];
 
   /**
    * isLeap
    * It checks that the year entered by user is leap year or not
    * @param {*} year
    * @returns It return true if the year is leap and false it the year is not leap year.
    */
   function isLeap(year:number):boolean {
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
getDays("february", 2024);
 

/**
* compareDates
*  It takes two dates, then convert them to time(value) by using getTime() and then compare those two values.
* @param {*} d1 Date 1 which we want to compare.
* @param {*} d2 Date 2 which we want to compare.
*/
 function compareDates(d1:string, d2:string) {
   // Create two Date objects
   const firstDate = new Date(d1);
   const secondDate = new Date(d2);
 
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
 * truncateString
 * We use the slice method to truncate the string str.slice(0,length).
 * @param {*} str The string we want to truncate.
 * @param {*} length The length upto which we want to truncate the string
 */
function truncateString(str:string, length:number) {
   const truncatedString = str.slice(0, length);
   console.log(truncatedString);
}
truncateString("rahul", 3);
 
/**
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
 * printStarPyramid
 * This function prints star pyramid patterns.
 * We use a for loop and as many rows we want to print we'll run it as many items and with each iteration it print a new line and it consist two more loop inside it.
 * The first loop inside the outer for loop is used to print the spaces, we runs if from j = 0 till j < 2*(rows-i)-1.
 * The second loop inside the outer for loop is used to print the *, we runs it from k = 0 till k < 2*i+1.
 */
function printStarPyramid(rows:number) {
   // Non-null assertion operator
   const starContainer = document.querySelector(".star_pattern")!;
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
   function newArrayGivenValue(size:number, value:string):string[] {
     let newArray:string[] = [];
     for (let i = 0; i < size; i++) {
       newArray.push(value);
     }
     return newArray;
   }
   const returnedArray = newArrayGivenValue(3, "a");
   console.log(returnedArray);
 
   //   way-2 using fill method.
   //   function createArray(length:number, value:string):string[] {
   //     let arr:string[] = new Array(length);
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
   function reverseArray(array:number[]) {
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
   function clearUnnecessaryElements(arr:(string|number|boolean|null|undefined)[]) {
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
   type nested = (string|number)[];
   function createObjectFromArray(arr:nested[]) {
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
   type values = (string|number)[];
   function arrayWithoutListedValues(arr:number[], ...values:values[]) {
     // If values are not an array.
     const newValues:values[][] = [];
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
   const withoutDuplicates:number[] = removeDuplicates(arr);
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
   function compareTwoArrays(arrOne:(string|number)[], arrTwo:(string|number)[]): boolean {
     let isEqual=false;
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
   function deepToPlainArray(arr:(number|number[])[]){
     return arr.flat(Infinity);
   }
   const plainArray = deepToPlainArray([1, 2, [3, 4],[5,6]]);
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
   function splitArray(array:number[], partition_size:number) {
     const result:number[][] = [];
     if (partition_size > 0) {
       for (let i = 0; i < array.length; i += partition_size) {
         let arr = array.slice(i, i + partition_size);
         result.push(arr);
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
    * @param   arrays Stores all the arrays in a single array.
    * @returns It return all the unique values which are present in every single array.
    */
   type uniqueValues = number[];
   function uniqueValue(...arrays:uniqueValues[]) {
     if (arrays.length == 0) {
       return {};
     }

     let reducedArray = arrays.reduce((acc, array) => {
       let filteredArray = acc.filter((value:number) => array.includes(value));
       return filteredArray;
     });
      let uniqueArray = removeDuplicates(reducedArray)
      return uniqueArray;
   }

   const unique = uniqueValue([1, 2, 4, 5, 9, 10],[2, 3, 1, 4, 9, 1],[2, 9, 1, 4, 1]);
   console.log(unique);
}
exercise40();


