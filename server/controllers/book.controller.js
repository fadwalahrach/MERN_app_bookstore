const {Book} = require('../models/Book')
const asyncHandler = require('express-async-handler')

const getAllBooks = asyncHandler(async(req,res,next) => { 
    const books = await Book.find()

    if(books.length === 0) {
        res.json({success: true, message: 'The database is empty'})
    }

    res.json({success: true, data: books})
})

const createBooks = asyncHandler(async(req,res,next) => { 

    const book = await Book.findOne(req.body.title)

    if(book) {
        res.status(400).json({success: false, message: 'you cannot add the same book title'})
    }

    const createBook = new Book(
        {
            _id: req.body.id,
            title: req.body.title,
            image: req.body.image,
            description: req.body.description,
            author: req.body.author,
            category: req.body.category,
            price: Number(req.body.price),
            countInStock: Number(req.body.count),
            rating: Number(req.body.rating),
            numReviews: Number(req.body.review),
          }
    )

    await createBook.save()

    res.status(400).json({success: false, message: 'Book added', data: createBook })

})


module.exports = {getAllBooks, createBooks}