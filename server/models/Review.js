const mongoose = require("mongoose");
const {userSchema} = require('./User')

const reviewSchema = new mongoose.Schema({
    rating:{
        type:Number,
        default: 0
    },
    comments:{
        type:String
    },
    user: userSchema
}, {
    timestamps: true
});



module.exports.Review = mongoose.model('Review', reviewSchema,'reviews');
module.exports.reviewSchema = reviewSchema