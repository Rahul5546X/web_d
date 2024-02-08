// intro to express js
// why should we use express
            // web framework, http packages has limited capabilities(we can not serve the static files, we have to implement security from starting, difficult to manage servers, to use get request post request we have to write custom code)

// we can install any version of express manually(npm i express @4)

    // documentation--> https://expressjs.com/
// making a minimal application of express js 

// simple hello world program
const express = require('express') // importing express
const app = express()  //defining a app
const port = 3000 // choosing a port

// app.get or app.post or app.put or app.delete(path,handler){

// }
//get--> browser mn agr kuch likh rhe ho
// post--> html file,postman
// app.get('/', (req, res) => {  
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// ************************************************program for making a blog
app.get('/', (req, res) => {  
    res.send('Hello World!')
  })
app.get('/home', (req, res) => {  
    res.send('Welcome to home section!')
  })
app.get('/contact', (req, res) => {  
    res.send('Welcome to contact section!')
  })
app.get('/about', (req, res) => {  
    res.send('Welcome to about section!')
  })
app.get('/shopping', (req, res) => {  
    res.send('Welcome to shopping side')
  })
app.get('/blog', (req, res) => {  
    res.send('Welcome to blog side')
  })
  
  // app.get('/blog/intro-to-backend', (req, res) => {  
      //     res.send('Welcome to intro to backend')
      //   })
      
      // app.get('/blog/intro-to-mongoDB', (req, res) => {  
          //     res.send('Welcome to intro to MongoDB')
          //   })
          
          // we do not need to do this all manually so we can easily do this using simple method in express
          
// in slugs we can write parameters(variables like slug jo bnaya h hmne) and get queries(?krke lga skte hn url mn)


app.get('/blog/:slug', (req, res) => {   //slug is parameter here
    // console.log(req);

    // for url  http://127.0.0.1:3000/blog/intro-to-js?mode=dark&region=IN
    console.log(req.params); // output=> {slug:"intro-to-js"}
    console.log(req.query); // output=> {mode:"dark", region:"IN"}


   res.send(`Welcome to ${req.params.slug}`)
 })


// app.get('/blog/:slug/:second', (req, res) => {   //slug is parameter here
//     res.send(`Welcome to ${req.params.slug} and ${req.params.second}`) //req.params give us a object
//   })
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})





