const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('This is my Home Page');
    } else if (req.url === '/contact') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('This is my Contact Info Page');
    } else if (req.url === '/file') {
      fs.readFile('assignment.txt', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error reading file');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(data);
        }
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Page not found');
    }
  });
  const port = 3000;
  server.listen(port, () => {
    console.log(`Server Running ${port}`);
  });  