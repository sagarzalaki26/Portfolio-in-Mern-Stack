const mongoose=require("mongoose")

const skillschema=new mongoose.Schema({
    name:{type:String ,reuired:true},
    level:Number
})

module.exports=mongoose.model("Skill",skillschema);