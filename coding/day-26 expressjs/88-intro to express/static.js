// to serve static files

const express = require('express') // importing express
const app = express()  //defining a app
const port = 3000 // choosing a port(5000 is also an option)



app.use(express.static('public')) // use this to serve static files(uahan vhi name dalna folder ka jisko app public krna chahte ho)
// app.use is used to access middleware and express.static is built in middleware that makes the folder (generally name public) public


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
  

app.get('/blog/:slug', (req, res) => {   //slug is parameter here
    
   res.send(`Welcome to ${req.params.slug}`)
 })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})





