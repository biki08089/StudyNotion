const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSend = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: "Study Notion, associated with codehelp",
      to: email,
      subject: "Email verification",
      text: "Welcome to our family.",
      html: `<h3 style="text-align:center">Welcome to "StudyNotion". Verify your email address by using below OTP. This otp will be valid only for "3 min".</h3><br><h1 style="text-align:center">${otp}</h1>`,
    });

    return info;

  } catch (error) {
    console.log(error);
  }
};
module.exports = mailSend;
