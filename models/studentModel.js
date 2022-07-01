const mongoose = require('mongoose');



/// create student data schema
const studentSchema = mongoose.Schema({
  
name :  {
    type : String,
    required : [ true, "Name is required"],
    trim : true
},
email :  { 
    type : String,
    required : [ true, "Email is required"],
    trim : true,
    unique : true
},
cell :  { 
    type : String,
    required : [ true, "Cell is required"],
    trim : true,
    unique : true
},
photo :  { 
    type : String,
    default : 'avatar.png'
}


}, {
    timestaps : true
});



/// export our model
module.exports = mongoose.model('student', studentSchema)