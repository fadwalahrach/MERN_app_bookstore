const express = require('express')
const router = express.Router()
const  {getAllBooks, createBooks} = require('../controllers/book.controller')

router.route('/').post(createBooks).get(getAllBooks)

module.exports = router