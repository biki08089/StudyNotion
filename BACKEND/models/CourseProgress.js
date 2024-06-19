const mongoose=require("mongoose");
const Course = require("./Course");

const courseProgress=new mongoose.Schema({
    CourseName:{
        type:mongoose.Schema.ObjectId,
        ref:"Course"
    },
    lecturesWatched:[{
        type:mongoose.Schema.ObjectId,
        ref:"Subsection",
    }]
});

module.exports=mongoose.model("CourseProgress",courseProgress);