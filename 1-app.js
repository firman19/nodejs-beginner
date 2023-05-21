// include http module
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// createServer() creates a new HTTP server and returns it
// Whenever a new request is received, the request event is called,
// providing two objects: a request (an http.IncomingMessage object) and
// a response (an http.ServerResponse object).
const server = http.createServer((req, res) => {
  // set statusCode property to 200 to indicate a successful response.
  res.statusCode = 200;
  // set the Content-Type header:
  res.setHeader("Content-Type", "text/plain");
  // we close the response, adding the content as an argument to end()
  res.end("Hello World!");

});

// The server is set to listen on the specified port and host name.
// When the server is ready, the callback function is called,
// in this case informing us that the server is running.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
