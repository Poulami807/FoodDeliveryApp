//Libraries
import express from 'express';

//DB Model
import {userModel} from '../../database/allModels';

const Router = express.Router();

/*
Route    /user/:_id
Desc     get user data
Params   _id
Access   Public
Method   GET 
*/

Router.get('/:_id',async (req,res)=>{
    try {
        const {_id} = req.params;
        const getUser = await userModel.findById(_id);
        if(!getUser){
            return res.status(404).json({error:"User not found!" })
        }
        return res.json({user:getUser})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

/*
Route    /user/update/:_id
Desc     update user data
Params   _id
Body     user data
Access   Public
Method   POST 
*/

Router.put('/update/:_id',async (req,res)=>{
    try {
        const {userId} = req.params;
        const {userData} = req.body
        const updateUser = await orderModel.findByIdAndUpdate({
             userId,
        },{
             $set:userData,
        },{
            new: true
        });

        return res.json({user: updateUser})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

export default Router;