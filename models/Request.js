const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
name: String,
quantity : String,
UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service'
},
problem:[String]
},
{
    timestamps: true
});

const Request = mongoose.model("Request", requestSchema);

module.exports = {Request};