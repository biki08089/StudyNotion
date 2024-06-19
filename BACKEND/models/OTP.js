const mongoose = require("mongoose");
const mailSend=require("../utils/sendMail");

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  otp: {
    type: string,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 3 * 60,
  },
});


OTPSchema.post("save",async function(doc){
    try {
        const mailRes=await mailSend(doc.email,doc.otp);
        return res.status(200).json({
            success:true,
            massage:"Email sent successfully."
        })
        
    } catch (error) {
        console.log("error occured while sending mails: ", error);
        throw error;
    }
})

module.exports = mongoose.model("OTP", OTPSchema);
