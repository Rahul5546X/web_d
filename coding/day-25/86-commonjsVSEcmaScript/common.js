// way to create modules in node.js

// while importing modules we use require("moduleName")

// e sb krne ke lie package mn type module nhi hona chaiye

let {a,b,c,d,x,y} = require("./commonP.js")

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(x)
console.log(y)

console.log(__dirname,__filename); // e bhi aata h require ke sath vapis
// exports, filename, dirname, modules, require
 