const express = require('express');
const route = express.Router();
const cartModel = require('../Models/cart')
route.post('/cart', async (req, res) => {
    try {
        const newCart = new cartModel({
            ...req.body
        })
        await newCart.save();
        res.json({
            status: true,
            message: newCart
        })
    } catch (error) {
        res.json({
            status: false,
            message: error
        })
    }
})

route.get('/cart', async (req, res) => {
    try {
        const list = await cartModel.find();
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

route.delete('/cart/:id',async(req,res)=>{
    try {
        await cartModel.findByIdAndDelete(req.params.id);
        res.json({
            status: true,
            message: 'cart items delete successfully'
        })
    } catch (error) {
        res.json({
            status: false,
            message: error
        })
    }
})
route.delete('/cart',async(req,res)=>{
    try {
        await cartModel.deleteMany();
        res.json({
            status: true,
            message: 'cart items delete successfully'
        })
    } catch (error) {
        res.json({
            status: false,
            message: error
        })
    }
})
module.exports = route