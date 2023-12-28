const express = require('express');
const router = require('express').Router();


router.use(express.json());

//Import Category Controller 

const categoryCtrl = require("../controllers/category");

//Routes 



//Export 
module.exports = router;