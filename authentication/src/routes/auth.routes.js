const express = require("express")
const authcontroller = require('../controllers/auth.controlelr')

const router = express.Router()



// register user 
router.post('/register', authcontroller.userRegister)





module.exports = router;