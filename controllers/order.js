const {Order} = require("../models/Order");

exports.order_create_post = (req,res) =>{
     console.log(req.body);
    let order = new  Order(req.body);
    let userID = req.query.id;
     order.UserId =  userID ;
    let requestId = req.query.id;
    order.requestId = requestId;

    //save Order
    order.save()
    .then((order)=>{
        res.json({order})
    })
    .catch((err)=>{
        console.log(err);
        res.send("please try again later!!")
    })
}

exports.order_edit_get =(req,res)=>{
    Order.findById(req.query.id)
    .then((order)=>{
        res.json({order})

    })
    .catch(err =>{
        console.log(err);
    })
}

exports.order_Update_put = (req,res) =>{
    Order.findByIdAndUpdate(req.body.id, req.body ,{new:true})
    .then((order)=>{
        res.json({order})

    })
    .catch(err => {
        console.log(err);
    })
}

