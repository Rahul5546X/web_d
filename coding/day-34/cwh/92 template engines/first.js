// ejs-->EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript. It allows you to embed JavaScript code directly into your HTML templates, making it easier to generate dynamic content.

// <h1>Hello, <%= username %></h1>

// EJS supports JavaScript control flow structures like <% if (condition) { %>, <% for (var i = 0; i < array.length; i++) { %>, etc., allowing you to include conditional logic and loops in your templates.


// You can define your own custom tags or functions to extend the functionality of EJS and create more modular and reusable templates.


// : EJS automatically escapes HTML characters by default to prevent XSS (Cross-Site Scripting) attacks. However, you can use <%- %> instead of <%= %> to output unescaped HTML.

//javascript variable ko yahan selena aur sites pr load krna
//partials is important
// we can  also overwrite the variables from partials




// put the views folder outside like public

const express = require('express') 
const app = express()  
const port = 3000 
const fs = require('fs')


app.use(express.static('public')) 
app.set('view engine', 'ejs'); // template enginer(used to set variables in template) there are also different type of viewengines
app.get('/', (req, res) => {  
    // res.send('Hello World!')
    // we want to serve the html(index.html) file when there a get request on /

    //suppose we get some data from database and we want ti show it on our site(for every endpoint so if we do it one by one it'll not be possible)
    let sitename = "Marvel"
    let SearchHero = "Ironman"
    let arr = [1,23,34]

    res.render('index' ,{sitename:sitename, SearchHero:SearchHero,arr})// used to render a viewport
    // to get value in html use this syntax  <%= sitename %>
    // we can pass array ,object everything
})



//another example same concept
app.get('/blog/:slug',(req,res)=>{
    let  title = "Marvel cinematic universe"
    let hero = "Ironman"
    // we want to add these variables in this template
    res.render('blogpost', {title:title, hero:hero})// e serve hojayegi jb esa krenge hm
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



