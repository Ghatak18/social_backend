
const express =  require("express")
const authRouter = express.Router()

const dotenv = require("dotenv");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookies = require("cookies")
const cp = require("cookie-parser")

const user = require("../models/users.models")
const post = require("../models/post.models")

const auth = require("../middlewares/auth.middlewares")

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

const {hi,register,login,logout} = require("../controllers/auth.controllers")

app = express()
app.use(express())
app.use(express.json())
app.use(cp());
dotenv.config()


authRouter.get("/hi",auth,hi)
authRouter.get("/ok",auth,async(req,res)=>{
    try{
        res.send("okk suor")
} catch(error){
    console.log(error)
}
    
}
)


authRouter.post("/register", register)
authRouter.post("/login",login)
authRouter.get("/logout",logout)


module.exports = authRouter;