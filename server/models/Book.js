const mongoose = require('mongoose'); // Erase if already required
const {reviewSchema} = require('./Review')
// Declare the Schema of the Mongo model
const bookSchema = new mongoose.Schema({
    _id: {type: String, require: true},
    title:{type:String,required:true},
    image:{type:String,required:true},
    author:{type:String, required:true},
    category: {type:String, required:true},
    reviews: [reviewSchema],
    numReviews:{type:Number, required:true, default:0},
    price:{type:Number,required:true,default:0},
    rating: {type: Number},
    countInStock:{type:Number,required: true, default:0},
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },

    //AS AN ADMIN, I CAN CREATE A PRODUCT 
    // AS A USER, I CANNOT CREATE A PRODUCT
}, {
    timestamps: true
});

//Export the model
module.exports.Book = mongoose.model('Book', bookSchema,'books');
module.exports.bookSchema = bookSchema