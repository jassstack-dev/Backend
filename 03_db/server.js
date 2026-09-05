const app = require('./src/app.js')

// connect db 
const connectDB = require('./src/db/db.js')
connectDB()




app.listen(3000, function(){
    console.log('hello bhai connect ho gaya 3000 port server pr ')
})