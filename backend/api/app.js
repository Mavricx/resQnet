import dotenv from "dotenv"
dotenv.config({ path: "../../.env" })
import connectDB from "../utils/db.js";
import express from 'express'
import cors from 'cors';
const app = express()
import User from "../models/user.js";
import Alert from "../models/alert.js";
import userRoutes from "../routes/userRoutes.js"

app.use(express.json())
app.use(cors());

app.get("/help", (_, res) => {
    res.json({ status: "success" })
})

app.use("/user", userRoutes)

connectDB().then(() => {
    // eslint-disable-next-line no-undef
    const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log(`Server started on port:${port}`)
    })
})


