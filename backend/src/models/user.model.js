import  mongoose from "mongoose";
import crypto from 'crypto'; 
const userSchema = new mongoose.Schema({
    name : { 
        type : String, 
        required : true 
    },
    email : { 
        type : String, 
        required : true, 
        unique : true,
    },
    password : { 
        type : String, 
        required : true 
    },
    avatar : { 
        type : String, 
        required : false,
        default : function() {
            return generateGravatar(this.email);
        } 
    } 
})

function generateGravatar(email) {
    const hash = require('crypto')
        .createHash('md5')
        .update(email.trim().toLowerCase())
        .digest('hex');
    
    return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=200`;
}
const User = mongoose.model("User", userSchema);

export default User;
 