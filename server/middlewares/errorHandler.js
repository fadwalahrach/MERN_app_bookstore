//To handle errors without doing try and catch everytime 

//Error in case the page is not found 
const notFoundPage = (req,res,next) => { 
    const error = new Error(`Not found [ ${req.originalUrl} ]`)
    res.status(404)
    next(error)
}
//errorHandler

const errorHandler = (err, req,res,next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode) // WE CANNOT HAVE a status code 200 in the catch error 
    res.json({
        message: err.message, //in the CONTROLLERS
        stack: err.stack // IN THE MODELS
    })
}

module.exports = { errorHandler , notFoundPage}