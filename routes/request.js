const express = require('express');
const router = require('express').Router();


router.use(express.json());

//Import Request Controller 

const requestCtrl = require("../controllers/request");

//Routes 

router.post('/add' , requestCtrl.request_create_post)
router.get('/edit' , requestCtrl.request_edit_get);
router.post('/update' , requestCtrl.request_update_post);
router.delete('/delete' , requestCtrl.request_delete_get);
//Export 
module.exports = router;