const express = require('express');
const router = require('express').Router();

const HasRole = require('../helper/role');


router.use(express.json());

//Import Category Controller 

const categoryCtrl = require("../controllers/category");
const isLoggedIn = require('../helper/isLoggedIn');

//Routes 

router.post("/add",isLoggedIn,HasRole("admin"),  categoryCtrl.category_create_post);
router.get("/index", categoryCtrl.category_index_get);
router.delete("/delete", categoryCtrl.category_delete_get);
router.get("/edit", categoryCtrl.category_edit_get);
router.put("/update", categoryCtrl.category_update_put);

//Export 
module.exports = router;