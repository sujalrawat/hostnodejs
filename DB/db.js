import mongoose from "mongoose"


mongoose.connect(process.env.MONGODB_URL)

const db = mongoose.connection

db.on('connected',() => {
    console.log("MongoDB connected")
})
db.on('disconnected',() => {
    console.log("MongoDb disconnected")
})
db.on("error",(err) => {
    console.log("Error while connecting mongodb ",err)
})

export default db;