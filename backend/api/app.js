//libraries
require('dotenv').config({ path: "../.env"});
// const passport=require('passport');
const express = require('express');
// const session = require('express-session');
const cors=require('cors');
const app = express()
const admin=require('firebase-admin');

// const GoogleStrategy=require('passport-google-oauth20').Strategy;

//models
const User =require("../models/user.js");
// import Alert from "../models/alert.js";

//routes
const userRouter = require("../routes/user.js");
const alertRouter = require("../routes/alert.js");
const authRouter= require("../routes/auth.js");

// import getNearbyUsers from "../utils/queryNearby.js";

//utils
const connectDB=require('../utils/db.js');
// const { default: user } = require('../models/user.js');
let lastLocation = null;

//middlewares

app.use(express.json())
app.use(cors({origin:"http://localhost:5173", credentials:true}));
// app.use(session({secret:process.env.SESSION_SECRET,
    // resave:false,
    // saveUninitialized:true}));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.serializeUser((user,done)=>done(null,user));
// passport.deserializeUser((user,done)=>done(null,user));

// passport.use(new GoogleStrategy({
//     clientID:process.env.CLIENT_ID,
//     clientSecret:process.env.CLIENT_SECRET,
//     callbackURL:process.env.GOOGLE_REDIRECT_URL
// }, async (accessToken,refreshToken,profile,done)=>{
//     try{
//         let user=await User.findOne({googleId:profile.id});
//         if(!user){
//             user=await User.create(
//                 {
//                     googleId:profile.id,
//                     name:profile.displayName,
//                     email:profile.emails[0].value,
//                     profilePic:profile.photos[0].value
//                 }
//             );
//             console.log(profile)
//         }
//         return done(null,user);
//     }
//     catch(err){
//         console.error(err,null);
//         return done(err,null);
//     }
// }))

const serviceAccount=require("../serviceAccountKey.json")
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.post("/api/verifyUser", async(req,res)=>{
    const {token}=req.body;
    try{
        const decoded=await admin.auth().verifyIdToken(token);
        // console.log("Decoded Token:", decoded);
        let user=await User.findOne({uid:decoded.uid});
        if(!user){
            user=await User.create({
               uid:decoded.uid,
               name:decoded.name,
               email:decoded.email,
               profilePic:decoded.picture
           });
        }
        console.log("User Logged In:", user)
        res.json({ success: true, user });
    }
    catch(err){
        console.error(err);
        res.status(401).json({error: "Invalid token"});
    }
});

app.get("/api/logout", (req, res) => {
  res.clearCookie("token");
  console.log("User logged out");
  res.json({ success: true, message: "Logged out" });
});



app.use("/auth", authRouter);

app.get("/help", (_, res) => {
    res.json({ status: "success" })
})


app.post("/postLocation", async (req, res) => {//get the location from the frontend
    const { lng, lat } = req.body;
    console.log(lat, lng);
    lastLocation = { lng:lng, lat: lat };
    // const nearby= await getNearbyUsers(lng,lat)
    res.json("location stored temporarily")
})


app.get("/getNearbyUsers", (req, res) => {
    if (!lastLocation) {
        return res.json({ nearby: [], message: "No location found yet" })
    }
    console.log("Returning last known location:", lastLocation);
    res.json({
        location: lastLocation,
    })
})

app.use("/user", userRouter)
app.use("/alert",alertRouter);



//start server
connectDB().then(() => {
    // eslint-disable-next-line no-undef
    const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log(`Server started on port:${port}`)
    })
})


