// import dotenv from "dotenv";
// dotenv.config({ path: "../../.env" });
import connectDB from "./db.js";
import User from "../models/user.js";

async function run() {
    await connectDB();
    const lng = -118.237560,  lat = 34.047113;
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
    console.log("nearby user count:", nearby.length);
    console.log(nearby);

}

run().catch(e => { console.error(e); })