//Library
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'json-web-token';

//Models
import {userModel} from '../../database/user/index';

const Router = express.Router();

/*
Route    /auth/signup
Desc     Register a new user
Params   none
Access   Public
Method   POST 
*/
Router.post("/signup", async (req,res)=>{
    try {
        //destructuring from credentials object
        const {email,password,fullName,phoneNumber} = req.body.credentials
        
        //check if user already exists
        const checkUserByEmail = await userModel.findOne({email}); //{email:email}
        const checkUserByPhone = await userModel.findOne({phoneNumber});
        if(checkUserByEmail || checkUserByPhone){
            return res.json({message:"User Already exists!"});
        }
        //pashword encryption
        //hash password
        const bcryptSalt = await bcrypt.genSalt(8);
        const hashedPwd = await bcrypt.hash(password,bcryptSalt);

        //save to db
        await userModel.create({
            ...req.body.credentials,
            password:hashedPwd});  //only password field will be overwritten with hashed password
        
        //generating JWT auth token for session storage
        const token = jwt.sign({user:{fullName,email}},"MyApp"); //creating token
        return res.status(200).json({token,status:"success"});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});

export default Router;