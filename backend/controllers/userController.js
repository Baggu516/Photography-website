const { customResponse } = require("../utilities/customResponse.js");
// .............modals.........
const {users} = require("../modals/registerModal.js");
const imagesModal=require("../modals/imageModal.js")
const {subimageModal}=require("../modals/subimageModal.js")
const bcrypt = require("bcrypt");
// .....jwt...
const jwt = require('jsonwebtoken');

// const dotenv = require('dotenv');
// dotenv.config();
// .....sendMail..
const sendMail=require("../utilities/sendMail.js")

// ...................otp generator.....
const generateOtp = () => {
    let otp = "";
    // let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for(let i=0;i<6;i++){
        otp += Math.floor(Math.random()*10);
    }
    return otp;

}
// ...........................
const Register = async (req, res) => {
  let { username, email, password } = req.body;
  if (!username || !email || !password) {
    return customResponse(res, 400, false, "fill all the fields", null);
  }
  try {
    let exist = await users.findOne({ email });
    console.log(exist);
    if (exist != null) {
        return customResponse(res,200,false,"User Already exist",null)
    }
    let hashPassword = await bcrypt.hash(password, 10);
    let newuser = await users.create({
      username,
      email,
      password: hashPassword,
    });
    if(!newuser){
        return customResponse(res,400,false,"user Not updated",null)
    }
    // ..adding otp to db..
    let otp=generateOtp()
    newuser.otp=otp
    let updatedUser=await newuser.save()
    // ...sending mail.............
    // sendMail({
    //     to:email,
    //     subject:"Photography",
    //     text:`Your otp is ${otp}`
    // })
    // generating jwt token.....
 
      // const created_user =  await newUser.save();
   
    return customResponse(res,200,true,"Registered successfully",updatedUser)

  } catch (error) {
    return customResponse(res,500,false,"something went wrong",null)
}
}
//.....................Login..........................................
const Login=async(req,res)=>{
  let {email, password } = req.body;
  console.log(req.body)
  if (!email || !password) {
    return customResponse(res, 400, false, "fill all the fields", null);
  } 
  let exist = await users.findOne({email})
  if(exist==null){
    return customResponse(res,400,false,"User doesn't exist",null)
  }
  try {
      console.log("above compare")
      let check=await bcrypt.compare(password, exist.password)
      console.log("below compare")
     if(check){
    
      // const created_user =  await newUser.save();
      let user = {id: exist._id}
      const access_token = jwt.sign(user, process.env.JWT_ACCESS_TOKEN_SECRET_STRING)

        // res.status(200).json({data: created_user, access_token})
  
      return customResponse(res,200,true,"User Logged in sucessfully",{exist,access_token})
  }
  else{
      return customResponse(res,400,false,"Invalid credentials",null)
  }
  } catch (error) {
      customResponse(res,500,false,"something went wrong",null)
  }
}
// ............forgott password.............if the user forgot  his password we will send otp to user email
const SendingOtp=async(req,res)=>{
 try {
  let {email}=req.body
  if(!email){
    return customResponse(res,400,false,"Enter your Email",null)
  }
  let exist=await users.findOne({email})
  if(exist ==null){
    return customResponse(res,400,false,"User is Not Registered",null)
  }
  let otp=generateOtp()
  exist.forgototp=otp
  await exist.save()
  
  sendMail({
    to:email,
    subject:"OTP for forgot password!",
    text:otp
  })
  return customResponse(res,200,true,"OTP sent sucessfully",exist)  
  
 } catch (error) {
  return customResponse(res,500,false,"something went wrong",null)
 }

}
// .........forgot password otp verification..............
const ForgotPasswordVerification=async(req,res)=>{
  let {email,otp,password,confirmPassword}=req.body
  console.log(req.body)
  if(!email || !otp || !password || !confirmPassword){
    return customResponse(res,200,false,"Required all fields",null)
  }
  try {
    let exist = await users.findOne({ email });
    console.log(exist);
    if (exist == null) {
        return customResponse(res,200,false,"Enter Valid Email",null)
    }
    if(password!==confirmPassword){
      return customResponse(res,400,false,"Password and Confirm-Password Must be same",null)
    }
    if(otp!=exist.forgototp){
      return customResponse(res,400,false,"Invalid OTP",null)
    }
    let hashPassword = await bcrypt.hash(password, 10);
    exist.password=hashPassword
    await exist.save()
    return customResponse(res,200,true,"Password changed Successfully",exist)

  } catch (error) {
    customResponse(res,500,false,"something went wrong",null)
  }
 


}
// .................Reset. Password...............................
const ResetPassword=async(req,res)=>{
  let user=req.user
  let {oldPassword,newPassword,confirmPassword}=req.body
  if(!oldPassword || !newPassword || !confirmPassword){
      return customResponse(res,400,false,"Required All fields",null)
  }
  if(newPassword!==confirmPassword){
    return customResponse(res,400,false,"New Password And confirmPassword must be same",null)
  }
  // console.log("userrrrrrrrrrrrrrrrrrr",)
  if(!await bcrypt.compare(oldPassword, user.password)){
      return customResponse(res,400,false,"Incorrect Old Password ",null)
  }
  try {
    let hashPassword = await bcrypt.hash(newPassword, 10);
  let exist=await users.findOne({email:user.email})
  exist.password=hashPassword
  let updated_User=await exist.save()
  return customResponse(res,200,true,"Successfully Reset The Password",updated_User)
  } catch (error) {
    customResponse(res,500,false,"something went wrong",null)
  }
  



}
// ...............Upload Image.....................
const uploadProfileImage=async(req,res)=>{
  let user=req.user
  console.log( req.file.path)
  // res.send( req.file.path)
  if(req.file.path==""){
    return customResponse(res,400,false,"No Link from Cloudinary",null)
  }
  let exist =await users.findOne({email:user.email})
  if(exist==null){
    return customResponse(res,400,false,"Error in uploadImage during email checking",null)
  }
  exist.profileURL=req.file.path
  let updated_User=await exist.save()
  return customResponse(res,200,true,"Successfully Uploaded Image in DataBase !",updated_User)

}
// ...............Get_User.......................

const Get_User=async(req,res)=>{
   let user=req.user
   return customResponse(res,200,true,"sucessful",user)

}

// .........ImageUploader..................
const ImageUploader=async(req,res)=>{
   try {
    let user=req.user
    console.log( req.file.path)
    // res.send( req.file.path)
    console.log("imageUploader...........",req.body.caption)
    if(req.file.path==""){
      return customResponse(res,400,false,"No Link from Cloudinary",null)
    }
    let exist =await imagesModal.findOne({email:user.email})
    if(exist==null){
      // let subimage=await subimageModal.findOne({email:user.email})
      // if(subimage==null){
        let newSubUser=await subimageModal.create({
          email:user.email,
          caption:req.body.caption,
          imgurl:req.file.path

        })
        console.log("new User in ImageUploader",newSubUser)
        if(newSubUser!=null){
          let newuser=await imagesModal.create({
            email:user.email,
            username:user.username,
            imgURL_Arr:[{...newSubUser}]
      
          })
        }
        else{
          return customResponse(res,200,false,"error in Sub modal",null)
        }
      }
    else{
      let newSubUser=await subimageModal.create({
        email:user.email,
        caption:req.body.caption,
        imgurl:req.file.path

      })
      console.log("new User in ImageUploader",newSubUser)
      if(newSubUser!=null){
        let lst=[...exist.imgURL_Arr]
        lst.push({...newSubUser})
        exist.imgURL_Arr=lst
      let updated_User=await exist.save()
      return customResponse(res,200,true,"Uploaded Successfully",updated_User)

      }
      else{
        return customResponse(res,200,false,"error in Sub modal",null)

      }
    }  
   

    // return customResponse(res,200,true,"Successfully Uploaded Image in DataBase !",updated_User)
   } catch (error) {
     return customResponse(res,500,false,"Something went Wrong !",null)
   }
}
// ............getUserImages......................................
const getUserImages=async(req,res)=>{
 try {
  let user=req.user
  let exist=await imagesModal.findOne({email:user.email})
  if(exist==null){
    return customResponse(res,200,false,"Unable get User Images",null)
  }
  return customResponse(res,200,true,"Successfully Load the User Images",exist)
 } catch (error) {
  return customResponse(res,500,false,"Something Went Wrong",null)
 } 
}
// ..........getAlluserImages..........................
const getAllUserImages=async(req,res)=>{
  
  let exist = await imagesModal.find({})
  if(exist.length==0){

    return customResponse(res,400,false,"No Data yet",null)
  }
  let lst=[]
  exist.forEach((item)=>{
     
    lst.push(...item.imgURL_Arr)

  })
  return customResponse(res,200,true,"Fetched Successfully",exist)
  console.log("all users",exist)


}
// .......getUserProfile.............
const getUserProfileImage=async(req,res)=>{
  
  let user=req.user
  let exist=await users.findOne({email:user.email})
  if(exist==null){
    return "userDoesnt exist"
  }
  return customResponse(res,200,true,"Succcessfull",exist.profileURL)

}
// ...............get all userProfile Images....................
const getAllUserProfiles=async(req,res)=>{
  
  let exist = await users.find({})
  if(exist.length==0){
    return customResponse(res,400,false,"No Data",null)
  }
  let lst=[]
  exist.forEach((item)=>{
    lst.push(item.profileURL)
  })
  return customResponse(res,200,true,"Fectched Successfully",lst)

}
module.exports={

  Register,Login,SendingOtp,ForgotPasswordVerification,

  Get_User,ResetPassword,uploadProfileImage,ImageUploader,

  getUserImages,getAllUserImages,getUserProfileImage,getAllUserProfiles

}
