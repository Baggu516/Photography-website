const mongoose=require("mongoose")
const {objectSchema}=require("./subimageModal.js")


const imageSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    username:{
        type:String
    },
    imgURL_Arr:{
        type: [objectSchema], 
        default: []     // Default value (empty array)
    }
})
const imagesModal=mongoose.model("imagesModal",imageSchema)
module.exports=imagesModal