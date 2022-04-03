import mongoose from "mongoose";

const leaderboardSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    score: {
        type:Number,
    }
})

export default mongoose.model('Leaderboard',leaderboardSchema);