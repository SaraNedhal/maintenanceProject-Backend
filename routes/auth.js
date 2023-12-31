const express = require('express');
const router = require('express').Router();


router.use(express.json());

//Import Auth Controller 

const authCtrl = require("../controllers/auth");

//Routes 
router.post("/signup", authCtrl.auth_signup_post);
router.post("/signin", authCtrl.auth_signin_post);
router.get("/user", authCtrl.auth_user_index_get);


//Export 
module.exports = router;