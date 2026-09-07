const userModel = require('../models/user.models')
const jwt = require('jsonwebtoken')



async function userRegister(req,res){
    const {username, email, password} = req.body

    const user = await userModel.create({
        username, email, password
    })

    const token = jwt.sign({
        id : user._id,
    }, process.env.JWT_SECRET)

}

module.exports = {userRegister}