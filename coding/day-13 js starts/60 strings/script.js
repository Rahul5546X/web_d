let real_name = "Anamika"
let friend = `Man"i"sha`

const game_name = new String("Mini Militia") // another way to declare strings
console.log(game_name);  
console.log(game_name.__proto__);  // to accesss prototype

console.log("My name is "+ real_name + " and my friend name is " + friend)

// itna jada na likhna ho to template literal ka use kr skte hn
// always use this template instead of using plus to concatenate the string

console.log(`My name is ${real_name} and my friends name is ${friend}`)
 

// String is immutable(original string can't be changed)
// escape sequence character  \n \t
console.log(real_name.toUpperCase())
console.log(real_name.toLowerCase())
console.log(real_name.length)
console.log(real_name.slice(2,6,2))
console.log(real_name.replace('a','b'))  // first occurence
console.log(real_name.concat(friend,"Shruti"))  
// wanna remove white spaces use .trim




//*****************numbers */
