const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    name: String,
   serviceProvider: String,
   description: String,
   UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
   categoryId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
}],
description:String
},
{
    timestamps: true
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = {Service};