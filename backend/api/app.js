import dotenv from "dotenv"
dotenv.config({ path: "../../.env" })
import connectDB from "../utils/db.js";
import express from 'express'

const app = express()

app.get("/help", (_, res) => {
    res.send("sending help")
})

app.post

connectDB().then(() => {
    // eslint-disable-next-line no-undef
    const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log(`Server started on port:${port}`)
    })
})


