const express = require("express");
const User  = require("../models/usermodel");
const router = express.Router();

router.get("/",(req,res) => {
    res.status(200).json({
        msg:"Welcome to nodejs"
    })
})

router.get("/:name",async(req,res) => {
    await User.findOne({name: req.params.name},(err,result) => {
        if(err) res.status(500).json({msg:err});
        res.json({
            data: result,
        })
    })
})

router.post("/register",async(req,res) => {
    const user = new User({
        name: req.body.name,
        rollNo: req.body.rollNo 
    });

    await user.save().
    then(() => {
        console.log('User registered');
        res.status(200).json("ok")
    })
    .catch(e => console.error(e));
    
})

router.patch("/:name",async(req,res) => {
    await User.findOneAndUpdate({name: req.params.name},
        {$set: {rollNo: req.body.rollNo}}
        ,(err,result) => {
        if(err) res.status(500).json({msg:err})
        res.status(200).json({msg:"Data updated succesfully"})
    })
})
module.exports = router;