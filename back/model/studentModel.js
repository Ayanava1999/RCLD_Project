const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const studentSchema = new Schema({
 name:{
    type:String,
    require:true
 },
 email:{
    type:String,
    require:true
 },
 mob:{
    type:Number,
    require:true
 },
 address:{
   type:String,
   require:true
},
course:{
   type:String,
   require:true
},
remarks:{
   type:String
}
},{timestamps :true});

module.exports=mongoose.model('student',studentSchema)
