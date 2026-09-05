const express = require('express');
const multer = require('multer')
const imagekit = require('./services/post.imagekit')


const postModel = require('./model/post.model');


const app = express()
app.use(express.json())

const upload = multer({storage : multer.memoryStorage()})





app.post('/create-post', upload.single("image"), async (req,res)=>{
    // console.log(req.body)
    // console.log(req.file)

    const result = await imagekit(req.file.buffer);
     
    const post = await postModel.create({
        image: result.url,
        caption : req.body.caption
    })

    res.status(201).json({
        message: "post created succesffully",
        post
    })
})

//get post 
app.get('/get-post', async(req,res)=>{
    const post = await postModel.find()

    res.status(200).json({
        message:"post fetched successfully",
        post
    })
})



module.exports = app;