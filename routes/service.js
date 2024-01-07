const express = require('express');
const router = require('express').Router();
const isLoggedIn = require("../helper/isLoggedIn");
const HasRole = require("../helper/role");


router.use(express.json());

//Import Service Controller 

const serviceCtrl = require("../controllers/service");

//Routes 
router.post("/add",  serviceCtrl.service_create_post);
router.get("/index", serviceCtrl.service_index_get);
router.get("/detail", serviceCtrl.service_show_get);
router.delete("/delete", isLoggedIn,HasRole("admin"), serviceCtrl.service_delete_get);
router.get("/edit", serviceCtrl.service_edit_get);
// router.get("/edit", isLoggedIn,HasRole("admin"), serviceCtrl.service_edit_get);
router.put("/update", serviceCtrl.service_update_put);




//Export 
module.exports = router;