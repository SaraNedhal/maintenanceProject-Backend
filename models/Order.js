const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
orderStatus: String,
requestId:String,
UserId: String

},
{
    timestamps: true
});

const Order = mongoose.model("Order", orderSchema);

module.exports = {Order};