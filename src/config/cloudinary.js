const dotenv=require("dotenv")
const cloudinaryModule=require("cloudinary")
const cloudinary=cloudinaryModule.v2;
dotenv.config({path:"../config/.env"})
   cloudinary.config({
    cloud_name:"dhflg8ro7",
    api_key:"293793529134595",
    api_secret:"idBHoI3VqRtCwCTlcEOt6HXtoyM"
   })
   module.exports=cloudinary;