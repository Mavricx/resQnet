import dotenv from "dotenv"
dotenv.config({ path: "../../.env" })
import connectDB from "../utils/db.js";
import express from 'express'
import cors from 'cors';
const app = express()

app.use(express.json())
app.use(cors());

app.get("/help", (_, res) => {
    res.json({status:"success"})
})

app.post

connectDB().then(() => {
    // eslint-disable-next-line no-undef
    const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log(`Server started on port:${port}`)
    })
})


