const express = require('express');
const cors = require('cors')
require("dotenv").config({path:'.env'})
require('./model/connectDb');
const app = express();

//Function Import
const routes = require('./control/router');

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors())
app.use(express.json());

app.get('/',(req, res)=>{
    res.send('Hello Im Rohit');
})



app.use('/api/v1',cors(corsOptions),routes);

app.listen(4000,()=>{
    console.log('listening to server 4000');
})