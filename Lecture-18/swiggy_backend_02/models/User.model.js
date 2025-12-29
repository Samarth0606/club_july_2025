import mongoose from "mongoose";

// schema
const userSchema = new mongoose.Schema({
    fullName: String, 
    email: String,
    password: String,
})

// model
const UserModel = mongoose.model('User' , userSchema)

// export
export default UserModel;