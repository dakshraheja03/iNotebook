const express = require("express")
const auth = require("../models/User") 
const User =require("../models/User")
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser=require('../middleware/fetchuser')
const JWT_SECRET="dakshisagood$boy"
const router = express.Router()

//Create a user on a endpoint: POST '/api/auth/createuser': No Login Required
router.post("/createuser",[
    check('email', 'Email should be a valid mail')
                    .isEmail(),
    check('name', 'Name length should be 3 to 15 characters')
                    .isLength({ min: 3}),
    check('password', 'Password length should be at least 5 characters')
                    .isLength({ min: 5})
],async (req, res) => {
    let success=false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success: success, errors : errors.array()})
    }
    else {
        //whether the email already exists
        try{
            let user= await User.findOne({email: req.body.email})
        if(user){
            return  res.status(400).json({success: success, error:"Sorry A User with this email already exist"})
        }
        const salt= await bcrypt.genSalt(10);
        const secPass= await bcrypt.hash(req.body.password,salt);
        user= await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        })
        const data={
            user:{
                id: user.id
            }
        }
        const authToken=jwt.sign(data,JWT_SECRET)
        success=true
        res.send({success: success,authToken})
        }
        catch(err){
            console.error(err.message);
            success=false
            return res.status(500).send({success:success,error: "Internal Server Error"});
        }
    }
})


//Authenticate a user on a endpoint: POST '/api/auth/login': No Login Required
router.post("/login",[
    check('email', 'Email should be a valid mail')
                    .isEmail(),
    check('password', 'Password Should not be empty')
                    .exists()
],async (req, res) => {
    const errors = validationResult(req);
    let success=false
    if (!errors.isEmpty()) {
        success=false
        return res.status(400).json({success,errors : errors.array()})
    }
    else{
        success=true
        const {email,password} = req.body;
        try{
            let user= await User.findOne({email: email})
            if(!user){
                return res.status(400).send({error: "Please try to login with correct credentials"});
            }
            const passCompare=await bcrypt.compare(password,user.password)
            if(!passCompare){
                return res.status(400).send({error: "Please try to login with correct credentials"});
            }
            const data={
                user:{
                    id: user.id
                }
            }
            const authToken=jwt.sign(data,JWT_SECRET)
            res.send({authToken,success})
        } catch(err){
            success=false
            console.error(err.message);
            return res.status(500).send({success, error: "Internal Server Error"});
        }
    }
})


//Getting user details on a endpoint: POST '/api/auth/getuser': Login Required
router.post("/getuser", fetchuser ,async (req, res) => {
    try{
        userId=req.user.id
        const user=await User.findById(userId).select("-password")
        res.send(user)
    }
    catch(err){
        console.error(err.message)
        return res.status(500).send({error: "Internal Server Error"});
    }
})

module.exports = router