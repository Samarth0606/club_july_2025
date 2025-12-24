const express = require('express'); //fn
const app = express() //object

//default path (root route)
app.get('/' , (req,res)=>{
    res.send("welcome")
})

app.post('/sammy' , (req,res)=>{
    res.send("Welcome to code baithak")
})

const PORT = 8080;  //2000-9000 // 5000,5050,8000,8080
app.listen( PORT, ()=>{ console.log(`SERVER IS CONNECTED AT PORT: ${PORT}`) } )

// http://localhost:8080 //check your server