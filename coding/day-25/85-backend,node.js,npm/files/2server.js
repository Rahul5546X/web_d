// making servers
// node 

const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// node "f:\sigma_web_d\coding\day-25\85-backend,node.js,npm\files\2server.js"
// express sikh  ke next.js sikhna asan ho jata h