const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI)
    .then(function(){
        console.log('mongoDB Connected')
    })
    .catch(function(err){
        console.log("mongoDB Error", err)
    })
}

module.exports = connectDB