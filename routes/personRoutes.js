import express from "express"
import person from ".././models/person.js"

const router = express.Router();

router.get("/",async (req,res) => {
    try{
        const userData = await person.find();
        res.send(userData)

    }catch(err){
        res.status(500).json({err:"internal server error"})
    }
})

router.get("/:work",async(req,res) => {
    try{
        const workType = req.params.work;
        if(workType==="chef" || workType==="waiter" || workType==="manager"){
            const user = await person.find({work:workType})
            res.status(200).json(user)
        }else{
            res.status(404).json({msg:"Invalid worktype"})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({err:"Internal server error"})
    }
})

router.post("/",async(req,res) => {
    try{
        const data = req.body;
        const newUser = new person(data)
        const response = await newUser.save()
        console.log("Data saved")
        res.status(200).json(response)
    }catch(err){
        res.status(500).json({err:"internal server error"})
    }
})

router.put("/:id",async (req,res) => {
    try{
        const userId = req.params.id;
        const updatedData = req.body
        const response = await person.findByIdAndUpdate(userId,updatedData,{
            new:true,
            runValidator:true
        })
        console.log("data updated")
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({err:"INternal server error"})
    }
})



router.delete("/:id",async (req,res) => {
    try{
        const userID = req.params.id;
        const response = await person.findByIdAndDelete(userID)
        console.log("data deleted")
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({err:"Internal server error"})
    }
})

export default router;