import {} from "dotenv/config"
import express from "express"
import db from "./DB/db.js"


const app = express()
const port = process.env.PORT ||3000

app.use(express.json())

app.get("/",(req,res) => {
    res.send("Hello")
})

import personRoutes from "./routes/personRoutes.js"

app.use("/user",personRoutes)

app.listen(port,() => {
    console.log(`Server is running on Port ${port}`)
})