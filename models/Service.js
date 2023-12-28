const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    name: String,
   serviceProvider: String,
   description: String,
   UserId: String,
   categoryId:String
},
{
    timestamps: true
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = {Service};