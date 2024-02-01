// calculate from jan-1st-1970

// calculate in milli seconds(easy for comparasion)


let myDate = new Date() // jo date or time abhi h mere computer ke acc. vhi hogi
// console.log(myDate);      //2024-02-01T09:44:27.398Z
// console.log(myDate.toString()); //Thu Feb 01 2024 15:16:16 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString());      //2024-02-01T09:46:16.078Z
// console.log(myDate.toDateString());      //Thu Feb 01 2024
// console.log(myDate.toTimeString());      //15:18:17 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleDateString());     //2/1/2024(mm/dd/yyyy)(month start from zero)
// console.log(myDate.toLocaleTimeString());     //3:17:26 PM
// console.log(myDate.toUTCString());     //Thu, 01 Feb 2024 09:48:58 GMT

// console.log(typeof myDate); //object

// declaring a custom date
// let newDate = new Date(2023,0,23)  // month start from 0 or 01
// console.log(newDate.toDateString());

// let myTimeStamp = Date.now()
// console.log(newDate.getTime()); // as date is object so we can get the time and then compare it with our timestamp
// // converting  in seconds
// console.log(Math.floor(Date.now()/1000));

let newDate1 = new Date()
console.log(newDate1);
console.log(newDate1.getFullYear());// many functions are available

// most important method
console.log(newDate1.toLocaleString('default',{
    weekday: "long"
}));


