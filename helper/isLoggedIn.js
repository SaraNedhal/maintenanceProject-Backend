const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports = (req, res , next) => {
    let token = ""
    let authorizationToken = req.header("Authorization");
    console.log(authorizationToken);

    if(authorizationToken){
        token = authorizationToken.replace("Bearer ", "");
        console.log(token);
    }
    if(!token){
        return res.status(400).json({"message" : "You Can not View the data because You didn't provide token"})

    }
    try{
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded.user;
        next();
    }
    catch(err){
        return res.status(401).json({"message":"Your token is invalid"});
    }
}