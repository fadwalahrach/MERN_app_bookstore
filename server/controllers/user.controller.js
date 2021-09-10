const { User} = require('../models/User')
const asyncHandler = require('express-async-handler')

const loginUser = asyncHandler(async(req,res,next) => {
        const {email,password} = req.body
        const user = await User.findOne({email})
        
        // console.log(user.matchPassword(password))
        if(user && await user.matchPassword(password) ){
            res.json({success:true, message: 'logged in', token: user.getJwtToken() })
        }

})


const registerUser = asyncHandler(async(req,res,next) => {

        const {username, email,password} = req.body
        const userFind= await User.findOne({email})
        console.log(userFind)
         //QUERY and SAVING 
        if (userFind){
            res.json({success: false, message:'User already exist'})
        }
        const user = new User({username,email,password})
        await user.save()

        res.json({success:true, message: 'registered in', token: user.getJwtToken() })
})

module.exports = {registerUser, loginUser}