const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello DSI3');
});

server.listen(3000);
