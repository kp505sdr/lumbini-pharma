const express=require("express");
const dotenv=require("dotenv")
const cors = require("cors")
const router = require("./src/routes/route")
const FileUpload=require("express-fileupload")
const app=express()
const dbConnection=require("./src/config/dbconnection")
 dotenv.config({path:"./src/config/.env"})
 
 dbConnection()
 const PORT=process.env.PORT ||5000

 app.use(cors())
 app.use(express.json())
//  app.use(FileUpload({
//     useTempFiles:true
//  }))
app.use(router)



app.listen(PORT, () => {
    console.log('Server is running on port!'+PORT);
});