const express = require('express');
const route = express.Router();
const orerModel = require('../Models/order');

route.post('/order', async (req, res) => {
    console.log(req.body);
    try {
        const newOrder = new orerModel({
            ...req.body
        })
        await newOrder.save();
        res.json({
            status: true,
            message: newOrder
        })
    } catch (error) {
        res.json({
            status: false,
            message: error
        })
    }
})

route.get('/order', async (req, res) => {
    try {
        const list = await orerModel.find();
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

module.exports = route