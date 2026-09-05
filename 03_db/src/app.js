const express = require('express')
const noteModel = require('../src/model/note.model')

const app = express()
app.use(express.json())



// crud operation

//post /notes => Create note
//get /notes => get note
//delete /notes/:id => delete note
//patch /notes/:id => update note

// create note

app.post('/notes', async (req,res)=>{
    const data = req.body;

   await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note Created"
    })
})

// get 

app.get("/notes", async (req,res)=>{
    const notes = await noteModel.find()    
    
    //find hamesha ek array of object return karna hai and notes nhi honge to ye null raay return karta hai 

    // findOne => ek array of object se sirf ek note find karega jise ham karna chahenge 


    res.status(200).json({
        message: "all notes fetched successfully",
        notes: notes
    })
})


// delete 

app.delete('/notes/:id',async (req,res)=>{
    const id = req.params.id

    await noteModel.findByIdAndDelete({
_id : id
    })

    res.status(200).json({
        message: "note deleted successfully",

    })

})


// update

app.patch('/notes/:id',async (req,res)=>{
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate(
        {_id : id} , {description: description}
    )

    res.status(200).json({
        message: "note updated successfully",

    })

})

module.exports = app;