const http = require('http'); //require http module for networking capabilities
const url = require('url'); // require url for url parsing and routing
require('dotenv').config(); // to define our environment variables
const fs = require('fs'); // to read our data from json file
const renderBats = require('./utils/renderTemplates');
const PORT = process.env.PORT || 8888;
const HOST = process.env.HOST;

//fetch data at start of application to have ready
const batData = fs.readFileSync(`${__dirname}/data/bats.json`, 'utf-8');
// create a data object to work with in our later templates
const batDataObject = JSON.parse(batData);
// read and load our templates

const tempLanding = fs.readFileSync(
  `${__dirname}/templates/landing-page.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/bat-card.html`,
  'utf-8'
);
const tempBat = fs.readFileSync(
  `${__dirname}/templates/bat-page.html`,
  'utf-8'
);

// create server instance
const server = http.createServer((req, res, err) => {
  // require url module pathname for routing purposes
  // use query variable and object destructuring on our urls to parse each link
  const { query, pathname } = url.parse(req.url, true);
  //home page
  if (pathname === '/' || pathname === '/overview') {
    // render our overview page
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    // map our data object to separate each object and render them in their templates on our landing page
    const batsHtml = batDataObject
      .map((bat) => renderBats(tempCard, bat))
      .join('');
    const renderHtml = tempLanding.replace('{%BASEBALL_BATS%', batsHtml);

    res.end(renderHtml);

    // baseball bat page
  } else if (pathname === '/baseball-bats') {
    // query for bat to displayy by storing bats in a variable with our query string and id
    const baseballBat = batDataObject[query.id];
    // use our render function to fill in templates
    const batpagesHtml = renderBats(tempBat, baseballBat);
    res.end(batpagesHtml);

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
