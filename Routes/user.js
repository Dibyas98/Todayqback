const express = require('express');
const userModel = require('../Models/user');
const route = express.Router();

route.post('/bookmark/:actions/:id/:userid', async (req, res) => {
    let updateProduct = {
        $push: {bookmark : req.params.id},
    }
    if(req.params.actions === 'remove'){
        updateProduct = {
            $pull: {bookmark : req.params.id}
        }
    }

    console.log(updateProduct);
    try {
        const update = await userModel.findByIdAndUpdate(req.params.userid,updateProduct);
        res.json({
            success:true,
            message: `Product get ${req.params.actions}`
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: false,
            message: error
        })
    }
})

route.post('/create',async(req,res)=>{
    try {
        const newUser = new userModel({
            ...req.body
        })
        await newUser.save();
        res.json({
            status: true,
            message: newUser
        })
    } catch (error) {
        res.json({
            status: false,
            message: error
        })
    }
})
route.get('/user/:id', async (req, res) => {
    try {
        const list = await userModel.findById(req.params.id);
        res.json({
            status: true,
            message: list
        })
    } catch (error) {
        res.json({
            status: false,
            message: error
        })
    }
})

module.exports=route