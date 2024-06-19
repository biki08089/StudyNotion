const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    require: true,
  },
  price:{
    type:String,
    require:true,
  },
  thumbnail:{
    type:String,
    require:true,
  },
  courseContent:{
   type:mongoose.Schema.ObjectId,
   ref:"Section",
  },
  ratingAndReviews:{
    type:mongoose.Schema.ObjectId,
    ref:"RatingsAndReview",
  },
  studentsEnrolled:{
    type:mongoose.Schema.ObjectId,
    ref:"User"
  }
});

module.exports = mongoose.model("Course", CourseSchema);
