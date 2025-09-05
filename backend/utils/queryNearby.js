// import dotenv from "dotenv";
// dotenv.config({ path: "../../.env" });
import connectDB from "./db.js";
import User from "../models/user.js";

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

export default getNearbyUsers;