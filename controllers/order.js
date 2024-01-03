const {Order} = require("../models/Order");

exports.order_index_get = (req,res) =>{
    //populete
    Order.find().populate('requestId')
    .then((order)=>{
        res.json({order})
      })
      .catch(error=> {
        console.log("error in getting all the orders in backend , " , error);
      })
}

module.order_index_user_get =  (req,res) => {
    const userId = req.query.id
    Order.find().populate('requestId')
    .where({UserId : userId})
    .then(userOrders =>{
        res.json(userOrders)
    })
    .catch(error=>{
        console.log("failed to load all the list of current user orders in backend" , error);
    })
}
exports.order_create_post = (req,res) =>{
     console.log(req.body);
    let order = new  Order(req.body);
    // let userID = req.query.id;
    //  order.UserId =  userID ;
    // let requestId = req.query.id;
    // order.requestId = requestId;
   
    //save Order
    order.save()
    .then((order)=>{
        res.json({order})
        console.log("order Added succesfully")
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
        console.log("order edited successfully");
    })
    .catch(err =>{
        console.log(err);
        console.log("please try again !!");
    })
}

exports.order_update_post = (req,res) =>{
    Order.findByIdAndUpdate(req.body._id, req.body ,{new:true})
    .then((order)=>{
        res.json({order})
    console.log(" order Updated successfully");
    })
    .catch(err => {
        console.log(err);
        console.log(" pleas try again !!");
    })
}
exports.order_delete_get = (req, res) => {
    console.log(req.query.id);
    Order.findByIdAndDelete(req.query.id)
    .then((order) => {
      
      res.json({order})
    })
    .catch((err) => {
      console.log(err);
    })
  }

exports.order

