const mongoose = require("mongoose")


const connectdb = async () =>{
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("Database is connected")
    }catch(err){
        console.log("Cant connect to DataBase"+ err)
    }

}


module.exports = connectdb