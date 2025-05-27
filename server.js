const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './public/index.html';
  }
  filePath = path.resolve(__dirname, filePath);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
      return;
    }
    const ext = path.extname(filePath);
    let type = 'text/plain';
    if (ext === '.html') type = 'text/html';
    if (ext === '.js') type = 'application/javascript';
    if (ext === '.css') type = 'text/css';
    res.writeHead(200, { 'Content-Type': type });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
