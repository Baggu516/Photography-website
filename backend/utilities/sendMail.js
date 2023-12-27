// search : gmail with nodemailer....
const nodemailer = require("nodemailer");
const dotenv=require("dotenv")
dotenv.config()
//.............
console.log(process.env.EMAIL_USERNAM)

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bhargavsainallagutla@gmail.com",
      pass: "zlyy ygfu tdjo mxyl",
    },
  });
  const mailOptions = {
    from: "bhargavsainallagutla@gmail.com",
    to: options.to,
    subject: options.subject,
    text: options.text,
    // html: htmlString
  };
  try {
    const email_sent_info = await transporter.sendMail(mailOptions);
    return email_sent_info;
  } catch (error) {
    console.log(error);
  }
};
module.exports=sendMail
