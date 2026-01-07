import express from 'express'
const app = express();
import mongoose from 'mongoose';
import restaurantRoute from './routes/restaurant.routes.js'
import userRoute from './routes/user.routes.js'
import cors from 'cors'

mongoose.connect('mongodb+srv://samarthvohraindia_db_user:VKQu6yJL7lapU1U5@cluster0.9uzb7bb.mongodb.net/') //url
.then(()=>console.log("DB CONNECTED") )
.catch(()=>console.log("DB NOT CONNECTED") )

app.use(express.json()) //json middleware
app.use(cors()); //CORS middleware

// middleware
app.use('/sam', (req,res,next)=>{
    console.log("i am middleware hahahhha");
    next();
})

app.get('/' , (req,res)=>{
    res.send("Root Route")
})

app.get('/sam' , (req,res)=>{
    res.send("Sam Route")
})

restaurantRoute(app)
userRoute(app)

const PORT = 8080
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})

// VKQu6yJL7lapU1U5
// samarthvohraindia_db_user
// mongodb+srv://samarthvohraindia_db_user:VKQu6yJL7lapU1U5@cluster0.9uzb7bb.mongodb.net/