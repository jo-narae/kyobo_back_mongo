const express = require('express');
const router = express.Router();

// Todo : 최종적으로는 라우터에서 모델을 가져다 쓰는 구문해야 함
const Book = require('../models/book');
const BookController = require('../controller/book');

router.get('/', BookController.getBooks);
router.get('/:id', BookController.getBookById);
router.post('/', BookController.createBook);
router.put('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);

module.exports = router;