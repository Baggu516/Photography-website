const mongoose=require("mongoose")
const registerSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:false
    },
    forgototp:{
        type:String,
        required:false
    },
    profileURL:{
        type:String,
        required:false
    }
})
const users=mongoose.model("registerModal",registerSchema)
module.exports={users}