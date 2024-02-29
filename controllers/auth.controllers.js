
const express =  require("express")
const dotenv = require("dotenv");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookies = require("cookies")
const cp = require("cookie-parser")

const user = require("../models/users.models")
const post = require("../models/post.models")

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';



app = express()
app.use(express())
app.use(express.json())
app.use(cp());
dotenv.config()
const hi = (req,res) =>{
    res.send("okkkk cool")
}

const register = async(req,res) =>{
    try{
        const{ username, email, password, confirmpassword, fullname} = req.body;
    
        if(!username || !email || !password || !fullname || !confirmpassword){
            res.json({
                "message" : "Please enter all the fields"
            });
        }
    
        if(password.length <= 4){
            res.json({
                "message":"Please enter password atleast 4 charecter long"
            })
        }
    
        if(password !== confirmpassword){
            res.json({
                "message":"Please confirm your password correctly"
            })
        }
    
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password,salt);
    
    
        const user2 = await user.findOne({username: username})
    
        if(user2){
            res.json({
                "message":"Yor are registered already"
            })
        }
    
    else{
       const user1 = await user.create({
        username: username,
        email: email,
        pass: hash,
        fullname: fullname
       })
    
       const token = jwt.sign({
        user: user1._id
    },process.env.JWT_PASS);
    
    console.log(token);
    
    res.cookie("token", token,{
        httpOnly: true
    }).send();
    
    res.json(user1);
    
    }
    } catch(error){
        console.log(error.message);
    }
}


const login = async(req,res) =>{
    try{
        const{email,password} = req.body;

        if(!email || !password){
            res.json({
                "message":"Please enter everything"
            })
        }

        const user3 =  await user.findOne({email:email})

        if(!user3){
            res.json({
                "messsage":"Incorrect email or password"
            })
        }

        const iscorrect = bcrypt.compare(password,user3.pass);

        if(!iscorrect){
            res.json({
                "messsage":"Incorrect email or password"
            })
        }

        const token = jwt.sign({
            user: user3._id
        },process.env.JWT_PASS)

        console.log(token)

        res.cookie("token",token,{
            httpOnly: true
        }).send()

        res.json(user3)

    } catch(error){

    }

}

const logout = (req,res) =>{
    try{
        res.cookie("token","",{
            httpOnly:true,
            expires: new Date(0)
        }).send()
    } catch(error){
        console.log(error.message)
    }
}

module.exports = {hi,register, login, logout}