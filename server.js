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
const server = http.createServer((req, res, err) => {
  // require url module pathname for routing purposes
  const pathname = req.url;
  //home page
  if (pathname === '/' || pathname === '/overview') {
    // render our overview page
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end('Welcome to our baseball bat catalog!');

    // baseball bat page
  } else if (pathname === '/baseball-bats') {
    res.end('baseball bats here!');

    //api
  } else if (pathname === '/api') {
    //send data
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(batData);

    //404 not found
  } else {
    // error handling
    res.writeHead(404, {
      // headers
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1 style="color: red;"> Page Not found </h1>');
  }
});

// instruct server to listen on specified host and port
server.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
