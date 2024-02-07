// call back hell se bchne kelie promise use kr skte hn hm
import fs from "fs/promises"

// we can await directly
// let a = await fs.readFile("file2.txt")  // bahr rkhna pdegi file taki read ho ske
// console.log(a.toString());

// let b= await fs.writeFile("file3.txt","this is file 3 promises se likhi hui h")
let c = await fs.appendFile("file3.txt","\t appended hun mn",(e,d)=>{
    console.log(d);
})
// dhyan rkhna jb use kr rhe ho ki jitni bara create kr rhe ho file ko

