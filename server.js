const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  try {
    // Some code that might throw an error
    const data = JSON.parse(req.body);
    // ... process data ...
  } catch (error) {
    // Log the error and send a generic error response
    console.error('Error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});