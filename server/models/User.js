const mongoose = require('mongoose'); 
const bcrypt = require('bcryptjs')// Erase if already required
const jwt = require('jsonwebtoken')
require('dotenv').config()

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt);
})

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  

userSchema.methods.getJwtToken = (id) => {
        return jwt.sign({id: id}, process.env.KEY_TOKEN,{
        expiresIn: process.env.KEY_TOKEN_EXPIRE
    })
}
//Export the model
module.exports.User = mongoose.model('User', userSchema,'users');
module.exports.userSchema = userSchema

