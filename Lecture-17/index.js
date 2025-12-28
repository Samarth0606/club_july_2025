// const express = require('express') // fn
import express from 'express' // fn
const app = express() // object

// DB CONNECTION (localhost)
// const mongoose = require('mongoose'); //commonjs (old)
import mongoose from 'mongoose'; //esmodule (new)

// mongoose.connect('mongodb://127.0.0.1:27017/alex') //returns promise
mongoose.connect('mongodb+srv://samarthvohraindia_db_user:trafHk7VCySTgSNB@cluster0.anfpjbd.mongodb.net/') //returns promise
.then((resp)=>{ console.log("DB CONNECTED") })
.catch((err)=>{ console.log("ERROR IN CONNECTING DB") })

app.get('/' , (req,res)=>{
    res.send("Welcome to root path")
})

const PORT = 8080; //5000 , 5050 , 8000 , 8080
app.listen(PORT, ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})

// samarthvohraindia_db_user
// trafHk7VCySTgSNB
// mongodb+srv://samarthvohraindia_db_user:trafHk7VCySTgSNB@cluster0.anfpjbd.mongodb.net/