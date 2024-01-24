const { customResponse } = require("../utilities/customResponse.js");
// .............modals.........
const { users } = require("../modals/registerModal.js");
const imagesModal = require("../modals/imageModal.js");
const { subimageModal } = require("../modals/subimageModal.js");


const getComments=async (req,res)=>{
  let {imgRef,emailRef}=req.body
  console.log("getcomentssssssssssssssssssss",req.body)
  let exist = await imagesModal.findOne({email:emailRef})
  if(exist == null){
    return customResponse(res,200,false,"User not found",null)
  }
  exist.imgURL_Arr.forEach((item)=>{
    if(item. imgurl==imgRef){
      return customResponse(res,200,true,"fetched comments successfully",item.comments)
    }
  })

}
module.exports=getComments