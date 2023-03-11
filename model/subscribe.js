const mongoose = require('mongoose');


const SubscribeSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    send_email:{
        type: Boolean,
        default:true
    }
})

module.exports= mongoose.model('Subscribe',SubscribeSchema);