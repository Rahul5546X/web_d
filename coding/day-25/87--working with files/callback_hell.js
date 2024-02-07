fs.writeFile("file2.txt", "this is file 2 maded using writeFile. It is created ASYNCHRONOUSLY", () => {  // use writeFile
    console.log("done");
    fs.readFile("file2.txt",(error,data)=>
    {
        console.log(error,data.toString());
        fs.writeFile("file2.txt", "this is file 2 maded using writeFile. It is created ASYNCHRONOUSLY", () => {  // use writeFile
            console.log("done");
            fs.readFile("file2.txt",(error,data)=>
            {
                console.log(error,data.toString()); // data is a buffer so to read it convert it into string
                fs.writeFile("file2.txt", "this is file 2 maded using writeFile. It is created ASYNCHRONOUSLY", () => {  // use writeFile
                    console.log("done");
                    fs.readFile("file2.txt",(error,data)=>
                    {
                        console.log(error,data.toString()); // data is a buffer so to read it convert it into string
                        fs.writeFile("file2.txt", "this is file 2 maded using writeFile. It is created ASYNCHRONOUSLY", () => {  // use writeFile
                            console.log("done");
                            fs.readFile("file2.txt",(error,data)=>
                            {
                                console.log(error,data.toString()); // data is a buffer so to read it convert it into string
                                fs.writeFile("file2.txt", "this is file 2 maded using writeFile. It is created ASYNCHRONOUSLY", () => {  // use writeFile
                                    console.log("done");
                                    fs.readFile("file2.txt",(error,data)=>
                                    {
                                        console.log(error,data.toString()); // data is a buffer so to read it convert it into string
                                        fs.writeFile("file2.txt", "this is file 2 maded using writeFile. It is created ASYNCHRONOUSLY", () => {  // use writeFile
                                            console.log("done");
                                            fs.readFile("file2.txt",(error,data)=>
                                            {
                                                console.log(error,data.toString()); // data is a buffer so to read it convert it into string
                                                fs.writeFile("file2.txt", "this is file 2 maded using writeFile. It is created ASYNCHRONOUSLY", () => {  // use writeFile
                                                    console.log("done");
                                                    fs.readFile("file2.txt",(error,data)=>
                                                    {
                                                        console.log(error,data.toString()); // data is a buffer so to read it convert it into string
                                                    })
                                                    // suppose if we are doing it so many times for different files(callbackhell)
                                                
                                                }) 
                                                console.log("ending");
                                            })
                                            // suppose if we are doing it so many times for different files(callbackhell)
                                        
                                        }) 
                                        console.log("ending");
                                    })
                                    // suppose if we are doing it so many times for different files(callbackhell)
                                
                                }) 
                                console.log("ending");
                            })
                            // suppose if we are doing it so many times for different files(callbackhell)
                        
                        }) 
                        console.log("ending");
                    })
                    // suppose if we are doing it so many times for different files(callbackhell)
                
                }) 
                console.log("ending");
            })
            // suppose if we are doing it so many times for different files(callbackhell)
        
        }) 
        console.log("ending");
         // data is a buffer so to read it convert it into string
    })
    // suppose if we are doing it so many times for different files(callbackhell)

}) 
console.log("ending");