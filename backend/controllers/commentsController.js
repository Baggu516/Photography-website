const { customResponse } = require("../utilities/customResponse.js");
// .............modals.........
const { users } = require("../modals/registerModal.js");
const imagesModal = require("../modals/imageModal.js");
const { subimageModal } = require("../modals/subimageModal.js");

const commentsPost = async (req, res) => {
  let { refImg, liked, emailRef,text,username } = req.body;
  console.log("texttttttttttt",text)
  console.log("refImg", req.body);
  try {
    let exist = await imagesModal.findOne({ email: emailRef });
    console.log("exist Img", exist);
    if (exist != null) {
      exist.imgURL_Arr.forEach((item) => {
        console.log("inside Foreach", item.imgurl == refImg);
        if (item.imgurl == refImg) {
          // if (liked) {
            item.comments=[...item.comments,{ref_Username:req.user.username,text:text}]
             
          // }
        //    else {
        //     item.likes = item.likes - 1;
        //   }
          console.log("itemcommentsssss", item.comments);
        }
      });
      let updated_user = await exist.save();
      return customResponse(
        res,
        200,
        true,
        "Updated comments Successfully",
        updated_user
      );
    } else {
      return customResponse(res, 200, false, "Image store doesnt exist", null);
    }
  } catch (error) {
    return customResponse(res, 200, false, "Something went wrong", null);
  }
};
// ..........................................................
// const getComments=async (req,res)=>{
//   let {imgRef,emailRef}=req.body
//   let exist = await imagesModal.findOne({email:emailRef})
//   if(exist == null){
//     return customResponse(res,200,false,"User not found",null)
//   }
//   exist.imgURL_Arr.forEach((item)=>{
//     if(item. imgurl==imgRef){
//       return customResponse(res,200,true,"fetched comments successfully",item.comments)
//     }
//   })

// }
module.exports = 
  commentsPost

