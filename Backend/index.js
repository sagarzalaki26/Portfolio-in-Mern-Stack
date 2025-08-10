const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const Employeemodel = require('./model/employee');
const Projectmodel=require('./model/project')

mongoose.connect("mongodb://127.0.0.1:27017/employee")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("DB error", err));

  app.post('/login', (req, res)=>{
  const {email,password}=req.body;
  Employeemodel.findOne({email:email})
    .then(user=>{
    if(user){
      if(user.password===password){
        res.json("Success")
      }
      else{
        res.json("Invalid password")
      }
    }
    else{
      res.json("Email not registered");
    }
  })
   .catch(err => {
      console.error("Login error:", err);
      res.status(500).json("Internal server error");
    });
 }) ;

//Projects

//Adding projects
 app.post('/addproject',async(req,res)=>{
  try{
  const {title,description,link}=req.body;


  const newProject=new Projectmodel({title,description,link});
  await newProject.save();

  res.status(201).json({message:"Project added successfully."});

  }
  catch(error){
    console.error(error)
  }

 });

 //Fetching projects

 app.get('/projects' ,async(req,res)=>{
  try{
    const projects=await Projectmodel.find().sort({createdAt:-1});
    res.json(projects);


  }
  catch(error){
    console.error(error);
  }

 })



app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
