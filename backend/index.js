const express=require("express")
const app=express()
// ........config.........
const dotenv=require("dotenv")
dotenv.config()
// .........Database connection..........
// .........

require("./database/db.js")
// ...........router.......
app.use(express.json())
app.use("/home",require("./routers/userRouter.js"))
app.get("/",(req,res)=>{
    res.send("This photography Website")
})
// require("./middlewares/Auth.js")
app.listen(5000,()=>{

    console.log("server is connectedd.............")

})