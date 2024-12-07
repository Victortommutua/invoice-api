const express = require('express')
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const morgan = require( 'morgan');
const invoiceRouter = require("./routes/invoiceRoute");
const cors = require("cors");

var corsOptions = {
    origin: process.env.FRONTEND,
    optionsSuccessStatus: 200
  }
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3001;
app.get('/', async(req, res) => {
    res.send('home page');
})

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use("/api/invoice/", invoiceRouter);


mongoose.connect(MONGO_URL)
.then(()=> {
    app.listen(PORT, async(req, res) => {
        console.log(`server running on port ${PORT}`)
    })
    console.log('connected to mongoDb successfully');
})
.catch((error)=> {
    console.log(error);
})