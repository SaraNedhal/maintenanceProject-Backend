const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
orderStatus: String,
requestId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Request'
  },
amount: Number

},
{
    timestamps: true
});

const Order = mongoose.model("Order", orderSchema);

module.exports = {Order};