const express = require('express');
const router = require('express').Router();


router.use(express.json());

//Import Order Controller 

const orderCtrl = require("../controllers/order");

//Routes 
//create post
router.post("/add",orderCtrl.order_create_post);
router.get("/index",orderCtrl.order_index_get);
router.get("/edit",orderCtrl.order_edit_get);
router.post("/update",orderCtrl.order_update_post);
router.delete("/delete",orderCtrl.order_delete_get);



//Export 
module.exports = router;