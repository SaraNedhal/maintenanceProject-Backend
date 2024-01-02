const User = require('../models/User')
function HasRole(role) {
	return function(req, res, next) {
	// Get the user record from their ID
    console.log("the data of the user from the middleware")
      req.user
       console.log(req.user)
       User.findById(req.user.id)
       .then((user)=>{
         //res.json({user})
         req.user.role = user.role;

         if (role !== req.user.role) {
            res.redirect("/");
        } else {
            next();
        }
       })
       .catch((err)=>{
         console.log(err)
         res.redirect("/");
       })
	// Add role to req.user
    //const roles = ["admin","user"];

     


}}
module.exports=HasRole;