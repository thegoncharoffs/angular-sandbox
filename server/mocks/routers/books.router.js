import * as express from 'express';

let books = [
    {
        id: '1',
        author: 'Jack London',
        title: 'Marthin Iden',
        category: ['Classic']
    },
    {
        id: '2',
        author: 'Ernest Hemingway',
        title: 'The Old Man and The Sea',
        category: ['Classic', 'Sea']
    }
];

const booksRouter = express.Router();

booksRouter.get('/all', function(req, res){
    res.status(200).json(books);
});

booksRouter.get('/:id', function(req, res){
    books = books.filter((book) => book.id !== req.params.id);
    res.status(200).json(books);
});

// Export this router to use in our index.js

export default booksRouter;
