const customResponse=(res,status,success,message,data)=>{
    res.status(status).json({success: success, message: message, data: data})
}
module.exports={customResponse}