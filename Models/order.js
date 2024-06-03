const mongoose = require('mongoose');

const orderShema = new mongoose.Schema(
    {
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    telegram: {
        type: String,
    },
    country: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    payment: {
        type: String,
        require: true
    },
    addon: {
        type: String,
    
    },
    subtotal: {
        type: String,
        require: true
    },
    items:{
        type:String,
        require:true
    },
    file:{
        type:String
    }
})

const orderModel = mongoose.model('orders',orderShema)
module.exports = orderModel