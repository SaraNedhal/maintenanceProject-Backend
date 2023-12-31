const {Category} = require("../models/Category");

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
exports.category_create_post = (req, res)=>{
  console.log("req.body");
console.log(req.body)

const data = JSON.parse(req.body.addCategory);

let newlyAddedCategory = {
  name: data.name,
  // serviceId : req.body.serviceId,
  UserId: data.userId,
  image: req.file.filename
}
let category = new Category(newlyAddedCategory)
// let category = new Category(req.body);
// let image = req.file.filename;
// let userId = req.body.userId;
// category.UserId = userId
// category.image= image;

// Save Category
category.save()
.then((category)=>{
    res.json({category})
})
.catch((err)=>{
    console.log(err);
})

}

exports.category_index_get = (req, res)=>{
Category.find()
.then((categories)=>{
    res.json({categories})

})

.catch((err)=>{
 console.log(err)
})
}

exports.category_delete_get = (req, res)=>{
 console.log(req.query.id);
 Category.findByIdAndDelete(req.query.id)
 .then((category)=>{
   res.json({category})
 })
 .catch((err)=>{
    console.log(err);
 })
}

exports.category_edit_get = (req, res) =>{
    Category.findById(req.query.id)
    .then((category)=>{
      res.json({category})
    })
    .catch((err)=>{
        console.log(err)
    })
  
}

exports.category_update_put = (req, res)=> {
  console.log(req.body.id)
  Category.findByIdAndUpdate(req.body._id, req.body,{new:true})
  .then((category)=>{
    res.json({category})
  })
  .catch((err)=>{
    console.log(err)
  })
}
