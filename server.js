const http = require('http'); //require http module for networking capabilities
const url = require('url'); // require url for url parsing and routing
require('dotenv').config(); // to define our environment variables
const fs = require('fs'); // to read our data from json file

const PORT = process.env.PORT || 8888;
const HOST = process.env.HOST;

//fetch data at start of application to have ready
const batData = fs.readFileSync(`${__dirname}/data/bats.json`);
// create a data object to work with in our later templates
const batDataObject = JSON.parse(batData);
console.log(batDataObject);

// create server instance
const server = http.createServer((req, res) => {
  // require url module pathname for routing purposes
  const pathname = req.url;
  //home page
  if (pathname === '/' || '/landing') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end('Hello From Server!');
  }
});

// instruct server to listen on specified host and port
server.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
