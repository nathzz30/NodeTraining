/* 
* Primary file for the API
*
*/

// Dependencies
const http = require('http');
const url = require('url');

// The server should respond to all requests with a string
const server = http.createServer((req, res) => {

  // Get the URL and parse it
  // This implementation is different from the course cause the url.parse is deprecated since NODE 14
  const { pathname } = new URL(req.url, `http://${req.headers.host}/`);
  
  // Get the path
  const trimmedPath = pathname.replace(/^\/+|\/+$/g, '');

  // Get method from req obj
  const method = req.method.toLocaleLowerCase();

  // Send the response
  res.end('Hello World\n'); 
  // Log the request path

  console.log('Request recieve this path: '+trimmedPath+'the method is '+method);
  
});

// Start the server, and have it listen on port 3000
server.listen(3000, () => {
  console.log("The Server is listening on port 3000 now ");
});