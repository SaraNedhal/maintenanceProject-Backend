const {Request} = require("../models/Request");

module.exports.request_index_get = (req,res) =>{
  Request.find()
  .then((request)=>{
    res.json({request})
  })
  .catch(error=> {
    console.log("error in getting all the requests in backend , " , error);
  })
}
module.exports.request_create_post = (req,res) => {
  let userId = req.query.id;
  let serviceId = req.query.serviceId;
 let request = new Request(req.body);
 request.UserId = userId;
 request.serviceId = serviceId;
 request.save()
 .then((request)=>{
  console.log("Request created successfully");
  res.json({request})
 })
 .catch(error =>{
  console.log("error in adding a request in backend ," , error);
 })
};

module.exports.request_edit_get = (req,res) => {
  Request.findById(req.query.id)
  .then((request)=> {
    console.log("Request info fetched successfully");
    res.json({request})
  })
  .catch(error => {
    console.log("error in getting request info for editing in backend , " , error);
  })
}

module.exports.request_update_post = (req,res) => {
   Request.findByIdAndUpdate(req.query.id , req.body , {new:true})
   .then((request) => {
    console.log("Request updated successfully");
    res.json({request})
   })
   .catch(error=>{
    console.log("error in updating request and uploading it in db in backend , " , error);
   })
}

module.exports.request_delete_get = (req,res) => {
  Request.findByIdAndDelete(req.query.id)
  .then((request)=>{
    console.log("Request deleted successfully");
    res.json({request})
  })
  .catch(error => {
    console.log("error in deleting request in backend , " , error);
  })
} 