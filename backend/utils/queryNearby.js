// import dotenv from "dotenv";
// dotenv.config({ path: "../../.env" });
const connectDB = require("./db.js");
const User = require("../models/user.js");

async function getNearbyUsers(lng,lat) {
    await connectDB();
    // const lng = -118.237560,  lat = 34.047113;
    const nearby = await User.find({
        location: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [lng, lat]
                },
                $maxDistance: 1000
            }
        }
    });
    return nearby;
}

// getNearbyUsers().catch(e => { console.error(e); })

module.exports = getNearbyUsers;