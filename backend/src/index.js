import express from 'express';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import cors from 'cors'
import authRoutes from './routes/authRoutes.js';
import bookRoutes from "./routes/bookRoutes.js";



dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());



app.get("/" , (req , res)=>{
    res.send("welcome to bookbaaza.com")
    
})
//auth
app.use("/api/v1/auth" , authRoutes);
//book
app.use("/api/v1/books", bookRoutes);



app.listen(process.env.PORT ,()=>{
    console.log("server mast chal rha hai")
})

