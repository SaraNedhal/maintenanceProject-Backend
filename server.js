// server.js
// Require dependencies
const express = require('express');
require('dotenv').config()

// connect to mongoDB
require('./config/db')

// initialize express app
const app = express();

// get the port number form .env file, if undefined, 3000
const port = process.env.PORT || 3000


//  Middlewares
// Templating Engine


// to encode req.body - make form data readable in controllers
// app.use(express.urlencoded({ extended: true }));

// link you static folder i.e. images, css 
app.use(express.static('public'));
//-------------------------//
//import routes
const authRouter = require("./routes/auth");
const categoryRouter = require("./routes/category");
const orderRouter = require("./routes/order");
const requestRouter = require("./routes/request");
const serviceRouter = require("./routes/service");

//------- Mount routes -------//
// Your code goes here
app.use('/auth', authRouter);
app.use('/category', categoryRouter);
app.use('/order', orderRouter);
app.use('/request', requestRouter);
app.use('/service', serviceRouter);



//-------------------------//

// start listening to requests coming from the PORT
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))
