import bcrypt from 'bcrypt'
import UserModel from '../models/User.model.js';

// hash
export async function register(req,res){
    try{
        let {fullName,email,password} = req.body;
        let data = await UserModel.findOne({email});
        if(data){
            return res.status(409).json({"message":"User Already exists"})
        } else{
            const newUser = await UserModel.create({
                fullName,
                email,
                password: bcrypt.hashSync(password, 10)
            })
            return res.status(201).json({"message": newUser})
        }
    }
    catch(err){
        return res.status(500).json({"errorMessage":err})
    }
}

// compare

export async function login(req,res){
    try{
        const {email,password} = req.body;
        const data = await UserModel.findOne({email});
        if(!data){
            return res.status(401).json({"message":"User Doesnot exists"})
        }
        let validPassword = bcrypt.compareSync(password, data.password);
        if(!validPassword){
            return res.status(403).json({"message":"Invalid Credentials"})
        }
        // token (JWT)
        return res.status(200).json({
            user: {
                email: data.email ,
                fullName: data.fullName
            },
            // accessToken: token
        })
    }
    catch(err){
        return res.status(500).json({"errorMessage":err})
    }
}
