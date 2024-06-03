const express= require('express');
const route = express.Router();
const offerModel = require('../Models/offer')

route.get('/listing',async(req,res)=>{
    try {
        const list= await offerModel.find()
        res.json({
            status:true,
            message:list
        })
    } catch (error) {
        
    }
})

route.get('/listing/:id',async(req,res)=>{
    const param = req.params
    // console.log(param);
    const data = await offerModel.findById(param.id)
    res.json({
        status:true,
        message:data
    })
})

module.exports = route