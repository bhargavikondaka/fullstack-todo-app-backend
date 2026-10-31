const express=require('express');
const app=express(); 
const mongoose=require('mongoose');
const cors=require('cors');

const routes=require('./routes/ToDORoute');

require('dotenv').config();

const PORT=process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.
connect(process.env.MONGODB_URL)
.then(()=> console.log("connected to database"))
.catch((err)=>console.log(err))  

app.use(routes);

app.listen(PORT,()=>console.log(`running in local host http://localhost:${PORT}`))

//console.log(process.env.MONGODB_URL)