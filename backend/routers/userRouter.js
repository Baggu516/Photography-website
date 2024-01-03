const express=require("express")
const {Register, Login,Get_User,SendingOtp,
    ForgotPasswordVerification,ResetPassword,
    uploadProfileImage,ImageUploader,getUserImages,getAllUserImages,getUserProfileImage,getAllUserProfiles}=require("../controllers/userController.js")
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
router.post("/imageuploader",Auth,parser.single("img"),ImageUploader)
router.post("/upload-single-imgage",Auth,parser.single("img"),uploadProfileImage)//here img is the name key for the image path like {img:location of the img}
router.get("/getuserimages",Auth,getUserImages)
router.get("/getalluserimages",getAllUserImages)
router.get("/getuserprofileimage",Auth,getUserProfileImage)
router.get("/getalluserprofiles",Auth,getAllUserProfiles)
module.exports=router
