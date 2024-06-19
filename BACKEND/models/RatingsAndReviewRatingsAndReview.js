const mongoose=require("mongoose");

const ratingAndReviewsSchema=new mongoose.Schema({
   user:{
    type:mongoose.Schema.ObjectId,
    require:true,
    ref:"User",
   },
   rating:{
    type:Number,
    require:true,
   },
   review:{
    type:String,
    require:true,
   },


});

module.exports=mongoose.model("RatingsAndReview",ratingAndReviewsSchema);