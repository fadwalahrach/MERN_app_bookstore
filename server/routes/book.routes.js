const express = require('express')
const router = express.Router()
const  {getAllBooks, createBooks, getBook} = require('../controllers/book.controller')

router.route('/').post(createBooks).get(getAllBooks)
router.route('/:id').get(getBook)
module.exports = router