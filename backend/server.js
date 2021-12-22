const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello DSI3 to MEAN stack course');
});

server.listen(3000);
