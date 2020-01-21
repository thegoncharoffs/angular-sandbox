import express from 'express';
import bodyParser from 'body-parser';
import booksRouter from "./routers/books.router";

const app = express();
const port = 8080;
const root = '/';

const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

const routers = [
    {url: 'books', middleware: booksRouter},
];

// Modify headers
app.use(allowCrossDomain);
// npm install body-parser
// Needed to parse json requests
app.use(bodyParser.json());

routers.forEach(router => app.use(root + router.url, router.middleware));

// Other routes here
// !!! This should be placed after all your routes, as Express matches routes from start to end of the index.js file, including the external routers you required.
app.get('*', (req, res) => res.send('Sorry, this is an invalid URL.'));

app.listen(port, () => console.log(`Mock server is listening on port ${port}`));

