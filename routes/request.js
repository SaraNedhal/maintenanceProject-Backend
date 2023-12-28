const express = require('express');
const router = require('express').Router();


router.use(express.json());

//Import Request Controller 

const requestCtrl = require("../controllers/request");

//Routes 



//Export 
module.exports = router;