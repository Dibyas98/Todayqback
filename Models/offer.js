const mongoose = require('mongoose');

const OfferShema = new mongoose.Schema({
    category:{
        type: String,
        require:true
    },
    webname:{
        type: String,
        require:true
    },
    weburl:{
        type: String,
        require:true
    },
    webdesc:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    telegram:{
        type: String,
    },
    gambling:{
        type: String,
        require:true
    },
    adultcontent:{
        type: String,
        require:true
    },
    crypto:{
        type: String,
        require:true
    },
    contentoffering:{
        type: [],
        default:[]
    },
})
const offerModel = mongoose.model('offers',OfferShema);
module.exports=offerModel

