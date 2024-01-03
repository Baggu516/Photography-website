const mongoose=require("mongoose")
const imageSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    username:{
        type:String
    },
    imgURL_Arr:{
        type: [String], 
        default: []     // Default value (empty array)
    }
})
const imagesModal=mongoose.model("imagesModal",imageSchema)
module.exports=imagesModal