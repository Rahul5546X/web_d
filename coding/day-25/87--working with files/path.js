import path from "path"
// console.log(path);

let myPath = "f:\\sigma_web_d\\coding\\day-25\\87--working with files\\promise.js"
console.log(`Name of extension => ${path.extname(myPath)}`);  // extension bta dega e file ki jismn hm kam kr rhe h
console.log(`Name of directory => ${path.dirname(myPath)}`);
console.log(`Name of file => ${path.basename(myPath)}`);
// important function
console.log(`Joining 2 paths => ${path.join("c://","programs\\file.txt")}`);  //c:\programs\file.txt

