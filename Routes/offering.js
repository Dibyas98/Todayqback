const express = require('express');
const route = express.Router();
const offermodel = require('../Models/offer')
route.post('/offer/create', async (req, res) => {
    try {
        const newOffer = new offermodel({
            ...req.body
        }) 
        await newOffer.save();
        res.json({
            status: true,
            message: newOffer
        })
    } catch (error) {
        res.json({
            status: false,
            message: error
        })
    }

})

module.exports = route