//schema for users
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const deviceTokenSchema=new mongoose.Schema({
    token:String,
    platform:String,
    updatedAt:{type:Date,default:Date.now}
});

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
     gender:{
        type:String,
        enum:["Male","Female","Other"],
        required:true
     },
    deviceToken:[deviceTokenSchema],
    
    lastLocation:{
        type: {
            type: String,
            enum: ["Point"],
            default: "Point"
        },
        coordinates: {
            type: [Number],
            default: [0, 0]
        }
    }
})

userSchema.index({location:"2dsphere"});



export default mongoose.model("User",userSchema);