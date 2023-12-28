const express = require('express');
const router = require('express').Router();


router.use(express.json());

//Import Category Controller 

const categoryCtrl = require("../controllers/category");

//Routes 

router.post("/add",  categoryCtrl.category_create_post);
router.get("/index", categoryCtrl.category_index_get);
router.delete("/delete", categoryCtrl.category_delete_get);
router.get("/edit", categoryCtrl.category_edit_get);
router.put("/update", categoryCtrl.category_update_put);

//Export 
module.exports = router;