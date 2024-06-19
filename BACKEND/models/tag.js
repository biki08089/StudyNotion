const mongoose=require("mongoose");

const TagSchema=new mongoose.Schema({
  tagName:{
    type:String,
    require:true,
  },
  course:[{
    type:mongoose.Schema.ObjectId,
    ref:"Course",
  }]

});

module.exports=mongoose.model("Tag",TagSchema);