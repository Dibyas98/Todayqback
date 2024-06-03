const mongoose = require('mongoose');

const userShama = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    cart:{
        type:[],
        default:[]
    },
    bookmark:{
        type:[],
        default:[]
    },
    order:{
        type:[],
        default:[]
    }
})
const userModel = mongoose.model('users',userShama);
module.exports=userModel