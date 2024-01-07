const express = require('express');
const router = require('express').Router();


router.use(express.json());

//Import Auth Controller 

const authCtrl = require("../controllers/auth");
const upload = require("../config/multer")

//Routes 
router.post("/signup", upload.single("image"), authCtrl.auth_signup_post);
router.post("/signin", authCtrl.auth_signin_post);
router.get("/user", authCtrl.auth_user_index_get);
router.get("/user/edit", authCtrl.auth_user_edit_get);
router.get("/user/profile", authCtrl.auth_user_show_get);

router.put("/user/update" ,upload.single("image"), authCtrl.auth_user_update_put);



//Export 
module.exports = router;