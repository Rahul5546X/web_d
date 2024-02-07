
// agr type module nhi hoga package.json mn to e trika chlega 
// const http = require('node:http'); 

// agr type modules hoga to e trika chlega(module sare asynchronously load hote hn agr type module ho aur fir hm await bhhi sidha use kr skte hnn)
// const http = require('node:http'); 
import http from "http"  // modern syntax


const hostname = '127.0.0.1';
const port = 3000;
// const server =  await http.createServer((req, res) => { // works in modern syntax
const server = http.createServer((req, res) => { 
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
  //   res.end('Hello World\n');
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello orld</h1>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// we have to restart the server again and again so to make sure that server restart itself always whenever there is a change in file we can install a package name npm nodemon(window powershell run ni hone de rha h nodemon vali script)

// there is also a utility NVM(node version manager)
// nvm use 14(it'll use 14 version)

