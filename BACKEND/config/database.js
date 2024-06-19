const mongoose=require("mongoose");
require("dotenv").config();

const dbconnect=()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("DB connection successfull.");
    }).catch((error)=>{
       console.error("Error while connecting to DB"+ error);
    })
};

module.exports=dbconnect;