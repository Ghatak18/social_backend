const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        trim: true,
        lowercase:true
    },
    pass:{
        type: String,
        required:true
    },
    fullname:{
        type: String,
        required:true,
        trim: true
    },
    bio:{
        type: String,
        trim:true
    },
    profilepicture:{
        type: String,
        default: ""
    },
    coverpicture:{
        type: String,
        default: ""
    },

    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
}],

followers:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
],

followings: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
]


},{timestamps: true})


const user = new mongoose.model("user", userSchema);

module.exports = user;
