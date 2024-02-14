const express = require('express') // importing express
const app = express()  //defining a app
const port = 3000 // choosing a port


// basic way of testing the post  request but it is not the best way(if we have a large quantity of api)


//it is a middleware
app.use(express.static('public')) // for post request or giving access of public files to the user(always make sure to have a public folder before trying to use it)


// handling get requests is easy (can be checked directly from browser)
app.get('/', (req, res) => {  
  res.send('Hello World!') // e site pr show hoga
  console.log("hello world");// e hmare apne output mn dikhega
})


// handling post requests
// (get request are not safe(sensitive data will be shown in server logs) and they have also limit of 8192bytes)

app.post('/',(req,res)=>{
    res.send("hello i'm a post")
})

app.put('/',(req,res)=>{
    res.send("hello i'm a put")
})

app.delete('/',(req,res)=>{
    res.send("hello i'm a delete")
})

//serving static files template name ke folder mn dal  do phle unhe

// app.get('/index',(req,res)=>{
//     res.sendFile('templates/index.html',{root: __dirname})   // have to use absolute path(pura path) ya root specify kr do
// })

// res.send ke bahut method hote hn jo chaiye ho pdo aur use kro 
// res.redirect, res.end, res.jsonp, res.send, res.sendFile, res.sendStatus, res.download, res.json, res.render

//we can also do chaining
// app.get('/', (req, res) => {  
//     res.send('Hello World!') // e site pr show hoga
//     console.log("hello world");// e hmare apne output mn dikhega
//   })
// .post('/',(req,res)=>{
//     res.send("hello i'm a post")
// })
// .put('/',(req,res)=>{
//     res.send("hello i'm a put")
// })
// .delete('/',(req,res)=>{
//     res.send("hello i'm a delete")
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//agr blogs ke lie bnana h to routes use kr skte hn routes name ka folder bna lo uske andr js files bna lo fir usko yahan export kr do organization bdiya hoti h files ki
// const blog = require('./routes/blog')
// const shop = require('./routes/shop')
// app.use('/blog', blog)
// app.use('/shop', shop)




