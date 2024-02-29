const express = require("express");
const dotenv = require("dotenv");
const cp = require("cookie-parser")

const authRouter = require("./routers/auth.routers")

const connectdb = require("./database/db");

const user = require("./models/users.models")
const post = require("./models/post.models")
const comment = require("./models/comment.models");






dotenv.config()

app = express()
app.use(express())
app.use(express.json())
app.use(cp());


app.use("/auth", authRouter)






app.get("/", (req,res)=>{
    res.send("ore gandu")
})


app.listen(process.env.PORT,()=>{
    connectdb()
    console.log("app is running");
})