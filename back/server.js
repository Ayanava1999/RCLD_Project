const express = require('express')
const mongoose = require('mongoose');
const cors=require('cors') 
require('dotenv').config()

const studentRoute=require('./routes/student')
const courcesRoute=require('./routes/cources')

const app = express()

app.use(cors());

//midle ware

app.use((req,res,next)=>{
console.log(req.path , req.method)
next()
})

app.use(express.json())

//Student
app.use('/student',studentRoute)

//Cources
app.use('/cources',courcesRoute)

//connectto db
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB Connected sucessfully to" +process.env.MONGO_URL);
}).catch((err)=>{
    console.log(`Faild to connect to DB `+err);
})


app.listen(process.env.PORT,()=>{
    console.log("Listening on port" +process.env.PORT);
})