const { ConnectionStates } = require("mongoose");
const { Category } = require("../models/Category");

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
exports.category_create_post = (req, res) => {
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
