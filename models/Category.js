const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: String,
serviceId: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service'
        }],
UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},
{
    timestamps: true
});

const Category = mongoose.model("Category", categorySchema);

module.exports = {Category};


