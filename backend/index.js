const express=require("express")
const app=express()
const cors=require("cors")
// ........config.........
const dotenv=require("dotenv")
dotenv.config()
// .........Database connection..........


require("./database/db.js")
// .........cors........
app.use(cors())

// ...........router.......
app.use(express.json())
app.use("/home",require("./routers/userRouter.js"))
app.use("/home",require("./routers/likesRouter.js"))
app.use("/home",require("./routers/commentsRouter.js"))
app.get("/",(req,res)=>{
    res.send("This photography Website")
})
// require("./middlewares/Auth.js")
app.listen(5000,()=>{

    console.log("server is connectedd.............")

})