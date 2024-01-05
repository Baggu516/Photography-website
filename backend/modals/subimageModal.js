const mongoose=require("mongoose")

const objectSchema=mongoose.Schema({
   email:{
    type:String,
    required:false
   },
   caption:{
    type:String,
    required:false
   },
   imgurl:{
    type:String,
    required:false
   },


},{
    timestamps: true
})
const subimageModal=mongoose.model("subimageModal",objectSchema)
module.exports={subimageModal,objectSchema}