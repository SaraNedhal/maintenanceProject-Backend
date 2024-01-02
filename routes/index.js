// Load express module
const express = require('express');

// Initialize router functionality from express framework.
const router = express.Router();

// Require index controller
const indexCntrl = require("../controllers/index");

// Routes
router.get("/", indexCntrl.index_get);


// Export router
module.exports = router;