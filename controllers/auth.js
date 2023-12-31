// restFul API'S for Registration and Authentication

const User = require("../models/User")
const bcrypt = require('bcrypt');
const salt = 10;
const jwt = require('jsonwebtoken')

exports.auth_signup_post =(req, res)=>{
    let user = new User(req.body);
    let hash = bcrypt.hashSync(req.body.password, salt);
    console.log(hash);
    
    user.password = hash;
    user.save()
    .then(()=>{
     res.json({"message": "User Created Successfully!!!"})
    })
    .catch((err)=>{
      console.log({"message": err.message})
    })
    }
    
    
    exports.auth_signin_post = async (req, res) => {
        let { emailAddress, password } = req.body;
        console.log(emailAddress);
      
        try{
          let user = await User.findOne({emailAddress});
          console.log(user);
      
          if(!user)
          {
            return res.json({"message": "User not found!!!"}).status(400);
          }
      
          // Password Comparison
          const isMatched = await bcrypt.compareSync(password, user.password);
          console.log(password);
          console.log(user.password);
      
          if(!isMatched) {
            return res.json({"message": "Password Not Matched!!"}).status(400);
          }
      
          // Generate JWT
          const payload = {
            user: {
              id: user._id
            }
          }
      
          jwt.sign(
            payload,
            process.env.SECRET,
            {expiresIn: 36000000},
            (err, token) => {
              if (err) throw err;
              res.json({token}).status(200)
            }
          )
        }
        catch(err){
          console.log(err);
          res.json({"message": "You are not loggedIn!!!"}).status(400);
        }
      }
      exports.auth_user_index_get = (req, res)=>{
        User.find()
        .then((user)=>{
         res.json({user})
        })
        .catch((err)=>{
       console.log(err)
        })

      }