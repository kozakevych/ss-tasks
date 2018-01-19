const http = require('http');

const requestHandler = (req, res) => {
  res.end("Hello world");
}

const server = http.createServer(requestHandler);

server.listen(3000);
