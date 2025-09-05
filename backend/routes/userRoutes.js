import express from 'express';
const router = express.Router();
import User from "../models/user.js";

router.post("/help", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json({ status: "success", userId: user._id });
    }
    catch (err) {
        res.status(400).json({ status: "error", message: err.message })
    }
})