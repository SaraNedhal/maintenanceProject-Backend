const express = require('express');
const router = require('express').Router();


router.use(express.json());

//Import Service Controller 

const serviceCtrl = require("../controllers/service");

//Routes 



//Export 
module.exports = router;