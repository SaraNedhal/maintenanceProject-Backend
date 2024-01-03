const { ConnectionStates } = require("mongoose");
const { Category } = require("../models/Category");
const uploadCloudinary = require('../config/cloudinaryConfig');
const User = require("../models/User");

//restFul Api's

/*  name: String,
serviceId: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service'
        }],
UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  image: String */
// exports.category_create_post = async(req, res) => {
//   console.log("req.body");
//   console.log(req.body);
// console.log("req.body finished")
// console.log("here00")

//   const data = JSON.parse(req.body);
//   console.log("here01")

//   let imageValue = "";
//   if(req.file){
//     imageValue = req.file.filename
//   }
//   let UserId ="";
// if(data.userId){
//   UserId= data.userId
// }
// else{
//   UserId="User didn't provide User Id"
// }
// let catName ="";
// if(data.name){
//   catName= data.name
// }
// else{
//   catName="User didn't provide Category name"
// }
//   let newlyAddedCategory = {
//     name: catName,
//     // serviceId : req.body.serviceId,
//     UserId: UserId,
//     image: imageValue,
//   };
//   console.log("here02")

//   let category = new Category(newlyAddedCategory);
//   if(category.image){
//     await uploadCloudinary.upload_single(category.image)
//   }

//   // let category = new Category(req.body);
//   // let image = req.file.filename;
//   // let userId = req.body.userId;
//   // category.UserId = userId
//   // category.image= image;
// console.log("here1")
//   // Save Category
//   category
//     .save()
//     .then((category) => {
//       console.log("here2")

//       res.json({ category });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

exports.category_create_post = async (req, res) => {
  console.log("req.body");
  console.log(req.body);
  const data = JSON.parse(req.body.category);
  let newlyAddedCategory = {
    name: data.name,
    // serviceId : req.body.serviceId,
    UserId: data.userId,
    image: req.file.filename,
  };
  let category = new Category(newlyAddedCategory);
  // let category = new Category(req.body);
  // let image = req.file.filename;
  // let userId = req.body.userId;
  // category.UserId = userId
  // category.image= image;
  // Save Category

  try{
    if(req.file){
    await uploadCloudinary.upload_single(req.file.path)
  }
}
catch(err){
  console.log(err, err.message)
}

  category
    .save()
    .then((category) => {
      res.json({ category });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.category_index_get = (req, res) => {
  Category.find()
    .then((categories) => {
      res.json({ categories });
    })

    .catch((err) => {
      console.log(err);
    });
};

exports.category_delete_get = (req, res) => {
  console.log(req.query.id);
  Category.findByIdAndDelete(req.query.id)
    .then((category) => {
      res.json({ category });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.category_edit_get = (req, res) => {
  Category.findById(req.query.id)
    .then((category) => {
      res.json({ category });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.category_update_put = (req, res) => {
  console.log(req.file);
  console.log(req.body);
  const data = JSON.parse(req.body.category);

  console.log("id backend category", data._id);
  data.image = req.file.filename;

  console.log("the daTA BACKEND", data);
  Category.findByIdAndUpdate(data._id, data, { new: true })
    .then((category) => {
      res.json({ category });
    })
    .catch((err) => {
      console.log(err);
    });
};

// exports.category_edit_get = (req, res) =>{
//   Category.findById(req.query.id)
//   .then((category)=>{
//     res.json({category})
//   })
//   .catch((err)=>{
//       console.log(err)
//   })

// }

// exports.category_update_put = (req, res)=> {
// console.log("id backend category",req.body.category._id)
// const data = JSON.parse(req.body.category);
// // if (req.file) {
// //   updatedCategory.image = req.file.filename;
// // }
// let updatedCategory = {
//   name: data.name,
//   UserId: data.userId,
//   image:req.file.filename
// }
// Category.findByIdAndUpdate(data._id, updatedCategory,{new:true})
// .then((category)=>{
//   res.json({category})
// })
// .catch((err)=>{
//   console.log(err)
// })
// }
