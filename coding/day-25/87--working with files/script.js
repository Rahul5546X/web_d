// file and fs module

//reading and writing file system(callback hell)

import fs from "fs"
// console.log(fs);

// creating a file
console.log("starting");


// fs.writeFileSync("file1.txt","this is file 1 maded using writeFileSync. It is created Synchronously") //it writes a blocking code e asynchronously ni krega kam (so it is not a  good approach as js is aysnchronous in nature)

// fs.writeFile("file2.txt", "this is file 2 maded using writeFile. It is created ASYNCHRONOUSLY", () => {  // use writeFile
//     console.log("done");
//     fs.readFile("file2.txt",(error,data)=>
//     {
//         console.log(error,data.toString()); // data is a buffer so to read it convert it into string
//     })
//     // suppose if we are doing it so many times for different files(callbackhell)

// }) 


fs.appendFile("file2.txt","mujhe append kra hua h ",(error,data)=>{
    console.log("appended"); // jitni bar run kroge utni bar hota rhega
})
console.log("ending");

