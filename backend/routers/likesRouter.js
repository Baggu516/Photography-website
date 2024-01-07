const express=require("express")
const router=express.Router()
const postLikes=require("../controllers/likesController.js")
const Auth=require("../middlewares/Auth.js")

router.post("/likes",Auth,postLikes)
module.exports=router