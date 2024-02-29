const jwt = require('jsonwebtoken')

const auth = (req, res, next) =>{
    try{
        const token = req.cookies.token;
        if(!token){
            res.json({
                "errorMessage":"unauthorised motherchod"
            })
        }
            const verified =jwt.verify(token, process.env.JWT_PASS)
            req.email = verified.email;
            next()

        
    }catch(error){
        console.log(error)
        res.json({
            "errorMessage":"unauthorised motherchod"
        })
    }
}

module.exports = auth





// const jwt = require("jsonwebtoken");
// function auth(req,res,next){
//     try{
//         const token = req.cookies.token;
//         if(!token){
//           return res.status(401).json({errorMessage: "unauthorised1"});
//         }
//         const verified = jwt.verify(token, process.env.JWT_PASS);
//         console.log(verified);
//         req.user = verified.user;
        
//         next();
//     } catch(err){
//         console.err(err);
//         res.status(401).json({errorMessage: "unauthorised"});
//     }
// }
 
// module.exports = auth;