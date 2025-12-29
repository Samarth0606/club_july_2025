import { login, register } from "../controllers/user.controller.js";


export default function userRoute(app){
   app.post('/api/register' , register);
   app.post('/api/login' , login);
}

