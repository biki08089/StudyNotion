const mongoose=require("mongoose");

const subsectionSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    videoUrl:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    duration:{
        type:String,
        require:true,
    }
});

module.exports=mongoose.model("Subsection",subsectionSchema);