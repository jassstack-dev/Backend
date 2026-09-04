//GET => SERVER SE DATA FETCH  KARNA HO 
//POST => SERVER PR FRONTEND SE DATA BHEJNA 
//PATCH => DATA ALREADY HOTA HGAI BS USE UPDATEL KARNA 
//DELETE => DATA ALREADY AVAILABLE HOTA HAI USE DELETE KARNA 

// server ka start lkarna ye server.js ka kaam hot aha 

const app = require('./src/app')



// data pahale server pr bhej rha hu 

app.post('/notes', function(req,req){
    console.log(req.body)
})



app.listen(3000, function(){
    console.log("server running on 3000")
})