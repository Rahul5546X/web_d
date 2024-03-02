"use server"


import fs from "fs/promises"
export const submitAction = async(e)=>{
    // e jb chlega sb kuch server pr hoga jo ismmn likha hoga na ki client side pr
    console.log(e.get("name"), e.get("add"));
    // e hmare vale console mn hoga log
    let a = await fs.writeFile("formdata.txt",`Name is ${e.get("name")} and address is ${e.get("add")}`)
  }

