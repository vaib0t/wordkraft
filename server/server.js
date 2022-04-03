import mongoose from "mongoose";
import express from 'express';
import Cors from 'cors';
import './config.js';
import dictionary from "./routes/dictionary.js";
import leaderboard from "./routes/leaderboard.js";

const app = express();
const port = process.env.PORT || 8001;

const DBusername = process.env.Dbusername;
const DBpassword = process.env.Dbpassword;
const DBname = process.env.Dbname;
const Dbcluster = process.env.Dbcluster; 

const connection_url = `mongodb+srv://${DBusername}:${DBpassword}@${Dbcluster}.mongodb.net/${DBname}?retryWrites=true&w=majority`;

app.use(express.json());
app.use(Cors());
app.use(dictionary);
app.use(leaderboard);

mongoose
    .connect(connection_url)
    .then((result) =>{
        console.log("Connected to Database");
        app.listen(port,()=>{
            console.log(`Listening to localhost:${port}`)
        })
    })
    .catch(() => {
        console.log("Cannot Connect to Database");
    })