import {books} from '/mocks/books';

const express = require('express');
const router = express.Router();

router.get('/all', function(req, res){
    res.json(JSON.stringify(books));
});

router.get('/:id', function(req, res){
    res.json(JSON.stringify(books));
});

// Export this router to use in our index.js
module.exports = router;
