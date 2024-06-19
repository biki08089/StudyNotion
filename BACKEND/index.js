const express=require("express");
const dbconnect=require("./config/database");
require("dotenv").config();
const app=express();
const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`We are listenong at ${PORT}`);
});

dbconnect();