require('dotenv').config()
const app = require('./src/app')
const connectDB = require('./src/db/db')
connectDB()





app.listen(3000, function(){
    console.log('runnining server on the port of 3000')
})