const {Category} = require("../models/Category");

//restFul Api's

exports.category_create_post = (req, res)=>{
console.log(req.body)
let category = new Category(req.body);

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
