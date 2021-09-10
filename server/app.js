const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const { errorHandler , notFoundPage} = require('./middlewares/errorHandler')
 require('dotenv').config()
const bookRoute = require('./routes/book.routes')
const userRoute  = require('./routes/user.routes')
const PORT = process.env.PORT
const server = require('./config/db')

app.use(morgan('dev'))

//endpoints

//http://localhost:3002/api/v1
app.use(cors({origins: 'http://localhost:3000'}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//BEFORE THE ROUTES
// app.use('/api/v1/books',bookRoute)
app.use('/books', bookRoute )
app.use('/users', userRoute)

app.use(notFoundPage)
app.use(errorHandler)
app.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT}`)
    server
})