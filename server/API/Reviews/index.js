//Libraries
import express from 'express';

//DB Model
import {reviewModel} from '../../database/allModels';

const Router = express.Router();

/*
Route    /review/:resid
Desc     get all reviews based on restaurant id
Params   resid
Access   Public
Method   GET 
*/

Router.get('/:resid',async (req,res)=>{
    try {
        const {resid} = req.params;
        const reviews = await orderuModel.find({restaurant:resid});
        return res.json({reviews})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

/*
Route    /review/new
Desc     Add new review/rating
Params   None
Body     review object
Access   Public
Method   POST 
*/

Router.post('/new',async (req,res)=>{
    try {
        const {newReview} = req.body
        await reviewModel.create({...newReview});
        return res.json({review:"Successfully created review"})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

/*
Route    /review/delete/:_id
Desc     Delete a review
Params   _id
Access   Public
Method   DELETE
*/

Router.delete('/delete/:_id',async (req,res)=>{
    try {
        const {_id} = req.params;
        await reviewModel.findByIdAndDelete(_id);
        return res.json({review:"Successfully deletd review"})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

export default Router;