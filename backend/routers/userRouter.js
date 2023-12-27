const express=require("express")
const {Register, Login,Get_User,SendingOtp,
    ForgotPasswordVerification,ResetPassword,
    uploadSingleImage}=require("../controllers/userController.js")
const parser=require("../utilities/cloudinary.js")
const Auth=require("../middlewares/Auth.js")
const router=express.Router()
// ..........................................................................
router.post("/register",Register)
router.post("/login",Login)
router.post("/sendingotp",SendingOtp)
router.post("/forgotpasswordverification",ForgotPasswordVerification)
router.get("/user",Auth,Get_User)
router.post("/resetpassword",Auth,ResetPassword)
router.post("/upload-single-imgage",Auth,parser.single("img"),uploadSingleImage)//here img is the name key for the image path like {img:location of the img}
module.exports=router