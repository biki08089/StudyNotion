const mongoose=require("mongoose");

const ProfileSchema=new mongoose.Schema({
    FullName:{
        type:String,
        require:true,
    },
    profession:{
        type:String,
        rquire:true,
    },
    DOB:{
        type:Date,
        require:true,
    },
    gender:{
        type:String,
        require:true,
    },
    phoneNumber:{
        type:Number,
        require:true,
    },
    about:{
        type:String,
        require:true,
    }
});

module.exports=mongoose.model("Profile",ProfileSchema);