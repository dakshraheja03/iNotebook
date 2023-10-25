const express = require("express")
const auth = require("../models/Notes") 
const fetchuser=require('../middleware/fetchuser')
const Notes = require("../models/Notes")
const { check, validationResult } = require('express-validator');
const router = express.Router()


//Fetch all notes on a endpoint: GET '/api/notes/fetchallnotes':Login Required
router.get("/fetchallnotes", fetchuser ,async (req, res) => {
    try{
        const notes= await Notes.find({user: req.user.id})
        res.json(notes)
    }
    catch(err){
        console.error(err.message)
        return res.status(400).send({error: "User doesn't exist"})
    }
})

//Add notes on a endpoint: POST '/api/notes/addnote':Login Required
router.post("/addnote", fetchuser , [
    check('title', 'Enter a valid title')
                    .isLength({min:3}),
    check('description', 'Enter a Description')
                    .isLength({ min: 5}),
],async (req, res) => {
    try{
    const {title, description, tag }=req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors : errors.array()})
    }
        const note=new Notes({
            title,description,tag,user:req.user.id
        })
        const saveNote =await note.save()
    res.send(saveNote);
    }
    catch(err){
        console.error(err.message)
        return res.status(500).send({error: "Internal Server Error"});
    }
})

//Updating a note on a endpoint: PUT '/api/notes/updatenote': Login Required
router.put("/updatenote/:id", fetchuser ,async (req, res) => {
    try{
        const {title,description,tag}=req.body
        const newNote={}
        if(title){newNote.title=title}
        if(description){newNote.description=description}
        if(tag){newNote.tag=tag}
    
        let note =await Notes.findById(req.params.id)
        if(!note){
            return res.status(404).send({error: error.message})
        }
        if(note.user.toString()!==req.user.id){
            return res.status(401).send({error: "Not Allowed"})
        }
        note= await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
        res.send(note)
    }
    catch(err){
        console.error(err.message)
        return res.status(500).send({error: "Internal Server Error"});
    }
})

//Deleting a note on a endpoint: DELETE '/api/notes/deletenote': Login Required

router.delete("/deletenote/:id", fetchuser ,async (req, res) => {
    try{
        let note =await Notes.findById(req.params.id)
        if(!note){
            return res.status(404).send({error: error.message})
        }
        if(note.user.toString()!==req.user.id){
            return res.status(401).send({error: "Not Allowed"})
        }
        note= await Notes.findByIdAndDelete(req.params.id)
        res.send({message: "Note has been Deleted"})
    }
    catch(err){
        console.error(err.message)
        return res.status(500).send({error: "Internal Server Error"});
    }
})


module.exports = router