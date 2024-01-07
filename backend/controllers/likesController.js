const { customResponse } = require("../utilities/customResponse.js");
// .............modals.........
const {users} = require("../modals/registerModal.js");
const imagesModal=require("../modals/imageModal.js")
const {subimageModal}=require("../modals/subimageModal.js")


const postLikes= async(req,res)=>{
    let user=req.user
    let {refImg,liked,emailRef}=req.body
    console.log("refImg",req.body)
    try {
        let exist=await imagesModal.findOne({email:emailRef})
        console.log("exist Img",exist )
        if(exist != null){
           
            exist.imgURL_Arr.forEach((item)=>{
                console.log("inside Foreach",item.imgurl==refImg)
                if(item.imgurl==refImg){
                    if(liked){
                        item.likes=item.likes+1
                        item.likedPersons=[...item.likedPersons,req.user.username]
                        
                    }
                    else{
                        item.likes=item.likes-1 
                        let temp=item.likedPersons.filter((item)=>item!=req.user.username)
                        item.likedPersons=[...temp]
                    }
                    item.checked=liked
                    console.log("itemlikessssssssssss",item.likes)
                }
            })
           let updated_user= await exist.save()
           return customResponse(res,200,true,"Updated likes Successfully",updated_user)
        }
        else{
            return customResponse(res,200,false,"Image store doesnt exist",null)
        }
    } catch (error) {
        return customResponse(res,200,false,"Something went wrong",null)
    }
    
}
module.exports=postLikes