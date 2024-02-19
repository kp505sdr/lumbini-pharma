const mongoose=require("mongoose")

module.exports=dbConnection=()=>{
 
  mongoose.connect(process.env.DB_URI,{useUnifiedTopology:true}).then((data)=>{
    console.log(`mongodb connected with server: ${data.connection.host}`)
    }).catch((err)=>{
        console.log(err)
    })  
 
}