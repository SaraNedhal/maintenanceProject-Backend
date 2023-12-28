const express = require('express');
const router = require('express').Router();


router.use(express.json());

//Import Order Controller 

const orderCtrl = require("../controllers/order");

//Routes 



//Export 
module.exports = router;