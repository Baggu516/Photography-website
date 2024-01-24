const express=require("express")
const router=express.Router()
const Auth=require("../middlewares/Auth.js")
const getcomments=require("../controllers/getcommentsController.js")
router.post("/getcomments",getcomments)
module.exports=router

