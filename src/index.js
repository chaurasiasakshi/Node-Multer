const express = require("express");

const bodyParser = require("body-parser");
const multer = require('multer');

app = express();
const path = require("path");
const fs = require("fs");
app.use(bodyParser.urlencoded({extended:true}));



app.set("view engine","ejs");

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'uploads')
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage:storage}) ;







app.get("/", (req,res)=>{
    res.render("upload");
});

DBofEmp = require('./database.js')

app.post("/upload", upload.single("image"), async(req, res) => {
  const obj = {
    name : req.body.name ,
    age : req.body.age ,  
    image : req.file.filename 
    };

    
  newData = new  DBofEmp({
   name:obj.name,
   age:obj.age,
   image:obj.image
  });
  try {
    await newData.save();
    console.log(req.file,req.body);
    res.redirect('/');
} catch (err) {
    console.error(err);
    res.status(500).send("Error uploading data");
}
  });


port = 8080;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
