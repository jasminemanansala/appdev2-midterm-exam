const http = require('http');
const date = new Date();

const server = http.createServer((req, res) => {
  if (req.url === '/hello'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
  }
  else{
    res.setHeader('Content-Type', 'text/plain');
    res.end(date.toISOString());
  }
});

const hostname = 'localhost';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
