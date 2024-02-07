// for backend(e client ko show nhi hota h )
// database connections , pwd authentication bgera bgera

// always make a npm project(node package manager)
// npm init (details bhro or chill kro)
// iske bad hm packages install kr skte hn  npm install slugify (node modules name ka folder bn jayega khud)
// jo package folder bnenge unko bahr hi rhne dena agr andr lia to delete krne ke bad khud ni hoga install vo
// (agr node module ko delete kr dia to sirf npm install likhne se khud install ho jayega vo firse qnki ho package.json bnaya hh usmn dependencies aa jayengi uski khud

// kafi bdi chiz hoti h node modules bahut meme bhi bnte hn is pr dekhna kbhi

console.log("hello world");

// using the package we installed (slugify)


// e string ko slug bnata h (jo ki url mn hota h)
var slugify = require('slugify')

let a = slugify("some string")  // some string(default is (-))
console.log(a);

let b = slugify('some string', '+%')  // kuch aur chaiye ho separator ke lie to esa kr lo
console.log(b);


