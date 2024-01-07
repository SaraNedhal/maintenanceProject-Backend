const mongoose = require ('mongoose');

const userSchema = mongoose.Schema({
firstName:{
    type: String,
    required: true
},
lastName: {
    type: String,
    required: true
},
emailAddress: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
},
password:{
    type: String,
    required: true,
    minlength:[6, "Your password is too weak!!!"]
},
role: String,
phoneNumber: String,
image:String
},
{
    timestamps:true
});

const User = mongoose.model('User', userSchema);

module.exports=User;