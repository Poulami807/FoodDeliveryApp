import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
    menu:[{
        name:{type:String,required:true},
        menu:[{
            type:mongoose.Types.ObjectId,
            ref:"Foods",
        }]
    }],
    recommended:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Foods",
            unique:true,
        }
    ],
},
{
    timestamps:true,
}
);

export const menuModel = mongoose.model('Menus',menuSchema);
