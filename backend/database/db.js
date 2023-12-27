const mongoose=require("mongoose")
// console.log("url",process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("mongodb connected..........")
}).catch(()=>{
    console.log("err in mongodb")
})
// try {
//     await mongoose.connect(process.env.MONGODB_URL);
//     console.log("mongodb connected.....")
//   } catch (error) {
//     console.log("err in mongodb")
//   }