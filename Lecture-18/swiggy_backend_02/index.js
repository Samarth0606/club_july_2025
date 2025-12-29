import express from 'express'
const app = express();
import mongoose from 'mongoose';
import restaurantRoute from './routes/restaurant.routes.js'
import userRoute from './routes/user.routes.js'

mongoose.connect('mongodb+srv://samarthvohraindia_db_user:VKQu6yJL7lapU1U5@cluster0.9uzb7bb.mongodb.net/') //url
.then(()=>console.log("DB CONNECTED") )
.catch(()=>console.log("DB NOT CONNECTED") )

app.use(express.json()) //json middleware

app.get('/' , (req,res)=>{
    res.send("Root Route")
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