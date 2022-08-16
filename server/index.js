require('dotenv').config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//configs
import googleAuthConfig from './config/google.config';

//DB Connection
import connectDB from './database/connection';

//Routes
import Auth from './API/Auth'

//passport configuration
googleAuthConfig(passport)

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());

app.get("/",(req,res)=>{
    res.json({message: "Setup success"});
});

app.use("/auth",Auth);

app.listen(4000,()=>{
connectDB()
.then(()=>console.log('server is running'))
.catch(()=>console.log('Server is running but db connection failed'))
}
);