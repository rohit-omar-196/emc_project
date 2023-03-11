const mongoose = require('mongoose')
require("dotenv").config({path:'.env'})
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI).then(()=>{console.log('Connected to DB...')}).catch((err)=>{console.log(err)});