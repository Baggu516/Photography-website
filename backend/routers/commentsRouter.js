const express=require("express")
const router=express.Router()
const commentsPosts =require("../controllers/commentsController.js")
// const getcomments=require("../controllers/getcommentsController.js")
const Auth=require("../middlewares/Auth.js")

router.post("/comments",Auth,commentsPosts)
// router.get("/getcomments",Auth,getComments)
module.exports=router