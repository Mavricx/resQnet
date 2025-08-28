//schema for users
import mongoose from "mongoose";
import { TbNumber0Small } from "react-icons/tb";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        enum: ["Normal Citizen", "Police Authority", "System Admin"]
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        country: {
            type: String,
            required: true
        },
        State: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        zipcode: {
            type: Number,
            required: true,
        },
    },
    phoneNo:{
        type:Number,
        required:true
    },
    profilePicture:{
        type:String,
        required:true
    },
    deviceToken:[deviceTokenSchema],
    
    location:{
        type:{type:String,default:"Point"},
        coordinates:{ type:[Number],default:[0,0]}
    }
})

userSchema.index({location:"2dsphere"});

const deviceTokenSchema=new mongoose.Schema({
    token:String,
    platform:String,
    updatedAt:{type:Date,default:Date.now}
});

