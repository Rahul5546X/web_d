// way to create modules in node.js

// e sb krne ke lie package mn type module hona chaiye
// importing named exports   
// these are imported asynchronously so we can directly use await in them
import {a,b,d} from "./ecmaP.js"   // jo name h usise export krna pdega
console.log(a)
console.log(b)
// console.log(c) // not exported
console.log(d)

// importing default exports(kisi bhi name se import kr skte hn)
import objY from "./ecmaP.js"  // obj ki jgh kisi bhi name se kr skte hn
console.log(objY);
console.log(objY.z);  // qnki object h to e sb ho skta  h

