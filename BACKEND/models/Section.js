const mongoose=require("mongoose");

const SectionSchema=new mongoose.Schema({
    sectionName:{
        type:String,
        require:true,
    },
    lectures:{
        type:mongoose.Schema.ObjectId,
        ref:"Subsection",
    }
})

module.exports=mongoose.model("Section",SectionSchema);