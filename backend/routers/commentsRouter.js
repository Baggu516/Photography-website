const express=require("express")
const router=express.Router()
const commentsPosts=require("../controllers/commentsController.js")
const Auth=require("../middlewares/Auth.js")

router.post("/comments",commentsPosts)
module.exports=router