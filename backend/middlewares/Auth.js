const jwt =require("jsonwebtoken")
const {users}=require("../modals/registerModal.js")
// const dotenv = require('dotenv');
// dotenv.config();
console.log("process.env.JWT_ACCESS_TOKEN_SECRET_STRING",process.env.JWT_ACCESS_TOKEN_SECRET_STRING)
const protect=async(req,res,next)=>{
    let token;
    // console.log(req.headers)
    if(req.headers.authorization && ((req.headers.authorization.startsWith("Bearer")))){
        try {
            // get token from header
            token=req.headers.authorization.split(" ")[1]
            console.log("token",token)
            // verifying token
            // console.log("process.env.JWT_ACCESS_TOKEN_SECRET_STRING",process.env.JWT_ACCESS_TOKEN_SECRET_STRING)
            console.log("above verifying token1")
            const decode=jwt.verify(token,process.env.JWT_ACCESS_TOKEN_SECRET_STRING)
            console.log("above verifying token2")
            console.log(decode,"ddecv")
            // req.user=await RegisterModal.findById(decode.id).select("-password")
            console.log(req.user,decode.id,"req---user")
   
                const existing_user = await users.findById(decode.id); 
         
           
            console.log("existing_user",existing_user)
            req.user=existing_user
            // get user from token
            next()

        } catch (error) {
            res.send("Not Authorized,no token")
            
        }
    }
    else{
        res.send("Not Authorized")
    }


}
module.exports=protect