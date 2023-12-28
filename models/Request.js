const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
name: String,
quantity : String,
UserId: String,
serviceId: String,
problem:String
},
{
    timestamps: true
});

const Request = mongoose.model("Request", requestSchema);

module.exports = {Request};