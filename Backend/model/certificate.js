const mongoose=require("mongoose")

const certificateschema=new mongoose.Schema({
    title:{type:String,required:true},
    desciption:String,
    link:String

});

module.exports=mongoose.model("Certificate",certificateschema);