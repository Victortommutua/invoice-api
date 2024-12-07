const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var invoiceSchema = new mongoose.Schema({
    name:{
        type:String,
        lowercase: true,
        required:true,
    },
    email:{
        type:String,
        lowercase: true,
        required: true,
    },
    value:{
        type:Number,
        required: true,
    },
    description:{
        type:String,
        lowercase: true,
        required:true,
    },
},{timestamps: true });

//Export the model
module.exports = mongoose.model('Invoice', invoiceSchema);