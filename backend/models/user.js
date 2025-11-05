//schema for users
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deviceTokenSchema=new mongoose.Schema({
    token:String,
    platform:String,
    updatedAt:{type:Date,default:Date.now}
});

const userSchema = new Schema({
     googleId:{
        type:String,
        unique:true,
        required:true,
    },
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
        enum: ["Normal Citizen", "Police Authority", "System Admin"],
        default: "Normal Citizen"
    },
    address: {
        country: {
            type: String,
            required: false
        },
        State: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false,
        },
        zipcode: {
            type: Number,
            required: false,
        },
    },
    phoneNo:{
        type:Number,
        required:false
    },

    profilePic:{
        type:String,
        unique:true

    },
     gender:{
        type:String,
        enum:["Male","Female","Other"],
        required:false
     },
    //deviceToken:[deviceTokenSchema],
    
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



module.exports = mongoose.model("User", userSchema);