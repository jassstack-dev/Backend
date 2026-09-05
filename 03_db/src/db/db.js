const mongoose = require('mongoose')

async function connectDB() {

    await mongoose.connect('mongodb://127.0.0.1:27017/cohert')

    console.log('db connect ho gaya')
    
}

module.exports = connectDB