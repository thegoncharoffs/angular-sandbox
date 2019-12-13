const express = require('express');
const app = express();

const port = 8080; // A port number on which the server should accept incoming requests.
const root = '/';

// Execution
// npm run server

// Outer routes in things.js
const books = require('./books.js');
app.use(root + 'books', books);

// Other routes here
// !!! This should be placed after all your routes, as Express matches routes from start to end of the index.js file, including the external routers you required.
app.get('*', (req, res) => {
    res.send('Sorry, this is an invalid URL.');
});

app.listen(port);
// app.listen(port, host, backlog);

