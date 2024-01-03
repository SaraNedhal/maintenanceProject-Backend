const { Category } = require("../models/Category");
const {Service} = require("../models/Service")


exports.service_create_post = (req, res)=>{
    console.log(req.body)
    let service = new Service(req.body);
    // Save service
    service.save()
    .then((service)=>{
        console.log(" category id from service in backend (Add service api) : " , service.categoryId);
        let categoryIdLoop;
        service.categoryId.forEach((category)=> {
          categoryIdLoop = category._id
        
        console.log("categoryIdLoop: " , categoryIdLoop);
      Category.findById(categoryIdLoop)
      .then((category)=> {
        console.log("catch category record: , " , category);
        category.serviceId.push(service._id);
        console.log("category record after adding serviceId: , " , category);
        category.save();
      })
      })
      .catch(error=>{
        console.log("error on adding service id's to the category model in backend: " , error);
      })
        res.json({service})
    })
    .catch((err)=>{
        console.log(err);
    })
    
    }
    
    exports.service_index_get = (req, res)=>{
    Service.find()
    .then((services)=>{
        res.json({services})
    
    })
    .catch((err)=>{
     console.log(err)
    })
    }
     exports.service_show_get = (req,res) =>{
      Service.findById(req.query._id)
      .then((service)=>{
        res.json({service})

      })
      .catch((err)=>{
        console.log(err);
      })
     }

    //get all services for one specific category
    module.exports.service_by_category_get = (req,res) => {
      Service.find({category_id : req.query.id})
      .then()
      .catch()

    }
    
    exports.service_delete_get = (req, res)=>{
     console.log(req.query.id);
     Service.findByIdAndDelete(req.query.id)
     .then((service)=>{
      let categoryIdLoop;
      service.categoryId.forEach((category)=> {
        categoryIdLoop = category._id    
        Category.findById(categoryIdLoop)
        .then((category)=> {
          console.log("catch category record: , " , category);
          const serviceIndex = service.categoryId.indexOf(service._id);
          category.serviceId.splice(serviceIndex , 1);
          console.log("category record after deleting serviceId: , " , category);
          category.save();
        })  
      })
      res.json({service})
    })
     .catch((err)=>{
        console.log(err);
     })
    }
    
    exports.service_edit_get = (req, res) =>{
        Service.findById(req.query.id)
        .then((service)=>{
          res.json({service})
        })
        .catch((err)=>{
            console.log(err)
        })
      
    }
    
    exports.service_update_put = (req, res)=> {
      console.log(req.body._id)
      console.log("the request of the updated body :" , req.body);
      Service.findByIdAndUpdate(req.body._id, req.body,{new:true})
      .then((service)=>{
        let categoryIdLoop;
        console.log(" service.categoryId: " ,  service.categoryId);
        service.categoryId.forEach((category)=> {
          categoryIdLoop = category._id    
          Category.findById(categoryIdLoop)
          .then((category)=> {
            console.log("catch category record: , " , category);
            const serviceIndex = service.categoryId.indexOf(service._id);
            category.serviceId.splice(serviceIndex , 0 , service._id );

            console.log("category record after updating serviceId: , " , category);
            category.save();
          })  
        })
        res.json({service})
      })
      .catch((err)=>{
        console.log(err)
      })
    }