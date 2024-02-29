const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        req: true
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true
    },
    text:{
        type: String,
        trim: true,
        required: true
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],

    replies:[{
        user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
        },

        text:{
            type: String,
            required: true,
            trim: true
        },
        likes:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }]
    }],
},{timestamps:true})

const comment = new mongoose.model("comment",commentSchema)
module.exports = comment