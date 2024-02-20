const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MulterTest").then(()=>{
    console.log("Connected with database");
}).catch((error)=>
    console.log(error));


const Employee = new mongoose.Schema({
    name:String,
    age:Number,
    image :{
        data : Buffer,
        contentType : String
    }
});

const  EmployeeModel = mongoose.model('Employee',Employee);

module.exports= EmployeeModel;