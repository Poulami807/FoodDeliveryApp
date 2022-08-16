//Library
import express from 'express';

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
        //check if user already exists
        await userModel.findByEmailAndPhone(req.body.credentials);

        //password encryption -> inside pre (before saving to db)
        //save to db
        const newUser = await userModel.create(req.body.credentials);
        
        //generating JWT auth token for session storage

        // const token = jwt.sign({user:{fullName,email}},"MyApp"); //creating token

        const token = newUser.generateJwtToken()

        return res.status(200).json({token,status:"sign up success"});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});
/*
Route    /auth/signin
Desc     Signing in with email and password
Params   none
Access   Public
Method   POST 
*/
Router.post("/signin",async (req,res)=>{
    try {
        const user = await userModel.findByEmailAndPassword(re.body.credentials);
        const token = user.generateJwtToken();
        return res.status(200).json({token,status:"Login success"});

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})
export default Router;