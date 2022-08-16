import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String},
    address: [{details:{type:String},for:{type:String}}],  //array of objects
    phoneNumber:[{type:Number}],  //array for multiple phone no.s
},
{
    timestamps:true,
}
);

//statistics and methods
userSchema.static.findByEmailAndPhone = async ({email, phoneNumber}) => {
    
}

export const userModel = mongoose.model('Users',userSchema);
