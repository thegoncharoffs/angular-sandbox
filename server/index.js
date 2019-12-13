const express = require('express');
const app = express();

const port = 8080; // A port number on which the server should accept incoming requests.
const root = '/';
const host = 'angular-sandbox'; // Name of the domain. You need to set it when you deploy your apps to the cloud.
const backlog = 511; // The maximum number of queued pending connections. The default is 511

// Installation
// npm install --save express
// npm install --save body-parser
// npm install -g nodemon // To restart server on changes in server files

// Execution
// nodemon server/index.js

// Testing
// curl -X POST "http://localhost:8080/url"

// Static routes
app.get(root + 'get', (req, res) => { // Here we process get request by corresponding url
    res.send("You just called the get method at '/get'!\n"); // Here we send the response
});

app.post(root + 'post', (req, res) => { // Here we process post request by corresponding url
    res.send("You just called the post method at '/post'!\n");
});

app.all(root + 'all', (req, res) => { // Here we process all requests by corresponding url
    res.send("You just called the all method at '/all'!\n");
});

// Dynamic routes
app.get(root + 'dynamic/:id/:name', (req, res) => { // http://localhost:8080/dynamic/18/boris
    res.send('The id you specified is: ' + req.params.id + '\nAnd name is: ' + req.params.name);
});

// Pattern Matched Routes
app.get(root + 'pattern/:id([0-9]{5})', (req, res) => { // You can also use regex to restrict URL parameter matching.
    res.send('id: ' + req.params.id);
});

// Outer routes in things.js
const things = require('./books.js'); // Other file containing other routes
app.use(root + 'things', things); // The app.use function call on route '/things' attaches the things router with this route

// Other routes here
// !!! This should be placed after all your routes, as Express matches routes from start to end of the index.js file, including the external routers you required.
app.get('*', (req, res) => {
    res.send('Sorry, this is an invalid URL.');
});

// Middleware functions
// Middleware function to log request protocol
app.use(root + 'middleware', (req, res, next) => {
    console.log("A request for things received at " + Date.now());
    next(); // Says that we can use next passed request handler
});

// Route handler that sends the response after middleware function worked
app.get(root + 'middleware', (req, res) => {
    res.send('middleware');
});

// Third Party Middleware
const bodyParser = require('body-parser');
// To parse json data
app.use(bodyParser.json());

app.listen(port);
// app.listen(port, host, backlog);

