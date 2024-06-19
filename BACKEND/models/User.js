const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    acountType:{
        type:String,
        enum:["Admin","Student","Instructor"],
    },
    password:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    additionalDetails:{
        type:mongoose.Schema.ObjectId,
        ref:"Profile",
        requuire:true,
    },
    courseContent:[{
          type:mongoose.Schema.ObjectId,
          ref:"Course",
    }],
    courseProgress:[{
        type:mongoose.Schema.ObjectId,
        ref:"CourseProgress",
    }],

});

module.exports=mongoose.model("User",userSchema);