import mongoose from "mongoose"

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    work:{
        type:String,
        enum:["chef","waiter","manager"],
        required:true
    }
})

const person = new mongoose.model('person',personSchema)
export default person;