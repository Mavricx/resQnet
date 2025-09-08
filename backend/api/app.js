import dotenv from "dotenv"
dotenv.config({ path: "../../.env" })
import connectDB from "../utils/db.js";
import express from 'express'
import cors from 'cors';
const app = express()
import User from "../models/user.js";
import Alert from "../models/alert.js";
import userRoutes from "../routes/userRoutes.js"
// import getNearbyUsers from "../utils/queryNearby.js";

let lastLocation = null;;

app.use(express.json())
// connectDB();

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

app.use("/user", userRoutes)

connectDB().then(() => {
    // eslint-disable-next-line no-undef
    const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log(`Server started on port:${port}`)
    })
})


