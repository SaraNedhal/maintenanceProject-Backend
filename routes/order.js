const express = require('express');
const router = require('express').Router();


router.use(express.json());

//Import Order Controller 

const orderCtrl = require("../controllers/order");

//Routes 
//create post
router.post("/add",orderCtrl.order_create_post);


//Export 
module.exports = router;