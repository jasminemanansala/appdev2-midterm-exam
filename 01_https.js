const http = require('http');
const date = new Date();

const server = http.createServer((req, res) => {
  if (req.url === '/hello'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
  }
  else if (req.url === '/'){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Date Accesed: '+ date.toISOString());
  }
  else{
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

const hostname = 'localhost';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
