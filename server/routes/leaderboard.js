import { Router } from "express";
import Leaderboard from "../models/Leaderboard.js";

const leaderboard = Router();

leaderboard.post('/insertToLeaderboard', async(req,res) => {
    const usernameScore = await Leaderboard.findOne({
        name:req.body.username,
        score:parseInt(req.body.score)
    })
    console.log(usernameScore);
    try {
        const newelement = new Leaderboard({
            name:req.body.username,
            score:parseInt(req.body.score)
        })
        if(!usernameScore && req.body.username!=="" && parseInt(req.body.score)>0 && 
            parseInt(req.body.score)<29
        ){
            const savedUser = await newelement.save();
            res.status(201).send({
                "success":true
            })
        }
    }catch{
        res.send({
            "success":false
        })
    }
})

leaderboard.get('/getLeaderboard', async(req,res) => {
    const leader = await Leaderboard.find({}).sort({score:-1}).limit(10);
    res.send(leader);
})

export default leaderboard;