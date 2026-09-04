// iska kaam hai server ko create karna 

const express = require('express')

const app = express()
app.use(express.json()) // ye ab data ko  json format mai le skta hai

// ab mai bananunga janha mere saare notes aayenge jab mai server se req karunga then tab 
const notes = []


// ye method notes create karega 
app.post('/notes', (req,res)=>{
//   req.body =>  ye server pr request karegi data ko body mai bhejne ke lei 
    // ab ham ise notes array mai push kar denge 
    notes.push(req.body)

    res.status(201).json({
        message: "notes created successfully"
    })
})

// ye method notes ko read karega 
app.get('/notes', (req,res)=>{
    

    res.status(200).json({
        mesage: "all notes are fetched successfully",
        notes : notes,
    })
})

// ab notes ko delete karenge 
// /notes/:index ke bases pr => //agar hame dynamic part nikalna ho to /:index use karte hai chahe wo id ho to id ke lie /:id

app.delete('/notes/:index', (req,res)=>{
    const index = req.params.index  
    // console.log(index)

    
    const deleteNote = notes[index]

    delete notes[index];

    res.status(200).json({
        message: "note delated successfully",
        "deleted notes" : deleteNote,
        "all notes" : notes
    })
})

// and ab update karneeg 

app.patch('/notes/:index', (req,res)=>{
    const index =req.params.index;
    const title = req.body.title
    const description = req.body.description

    notes[index].description = description
    
    notes[index].title = title
   

    res.status(200).json({
        message : "updated successfully",
        
    })
})

// here i used postman for create , read, delete and update


module.exports = app;
