const express = require('express') 
const app = express()  
const port = 3000 
const fs = require('fs')

//What is a middleware
// the request response cycle  works like :-
  // requetst aai(sbse phle middleware mn jati h), fir handler match hoga(fir acc. to handler work hoga) aur uske bad res.send mtlb response send ho jata h 

  // e hr request se phle chlta h (it has request object and response object(it can check req.headers, it can send responses) )

  // middleware hmari request ko modify kr deta h(rok deta h request ko fir vo modify krta h use tb uske acc. response jata h)

  // hm ek middleware se dusre middleware ko control bhej skte hn  next() ka use krke ya to fir hm middleware se hi response send kr skte hn

  // order is important (jo phle ayega vo phle chlega agr phle aur bad mn same kam kia h to bad vala phle vale ko overwrite kr dega)

//why middleware
  // if you want to do some changes in every request
  // if you wanna check every request

//types of middleware
 //1. application -- jo app.use krke bnta h
 //2. router level-- specific for a particular route
 //3. error handling-- man lo koi error aaye to usko kaise handle krna h
 //4. built-in--static files ko handle krne ke lie express.static
 //5. 3rd party -- npm  i krke install kr skkte hn aur require se import krke apne code mn use kr skte hn


// built-in middleware
app.use(express.static('public')) 
// user defined middleware


// way 1
// function bnao aur use app.use mn dal do
const function_middleware = function (req,res,next){
  console.log("logged")
  console.log(`${Date.now().toLocaleString()} it is a ${req.method}`)
  // we can also use fs module here
  // fs.appendFileSync('response.txt',`${Date.now()} it is a ${req.method}\n`)
  next() // age next ni likhenge to request yahin fs jayegi
}
app.use(function_middleware)



// way2
app.use((req,res,next)=>{
  // res.send("request stopped by mw2")// so no need of next  Cannot set headers after they are sent to the client avoid this but if you wanna do this then remove next
  console.log(req.headers) // aur bhi bahut option hote hn
  console.log("logged 2")
  req.number = 14
  next() // remove it if you are sending response in middleware
})

// request mn kie gye changes overwrite ho jayenge agr do middleware mn same change kie honge(smjh jaio what I meant to say)



//these are route handlers
app.get('/', (req, res) => {  
    res.send('Hello World!' + req.number) // e hmne middleware mn change kia h
  }).get('/home', (req, res) => {  
    res.send(' home section!')   
  }).get('/about', (req, res) => {  
    res.send(' about sectiont!') 
  }).get('/blog', (req, res) => {  
    res.send(' blog section!') 
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







