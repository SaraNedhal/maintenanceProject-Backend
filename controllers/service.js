const {Service} = require("../models/Service")


exports.service_create_post = (req, res)=>{
    console.log(req.body)
    let service = new Service(req.body);
    
    // Save Serive
    service.save()
    .then((service)=>{
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
      console.log(req.body.id)
      Service.findByIdAndUpdate(req.body._id, req.body,{new:true})
      .then((service)=>{
        res.json({service})
      })
      .catch((err)=>{
        console.log(err)
      })
    }