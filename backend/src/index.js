import express from 'express';
import dotenv from "dotenv";
import cors from 'cors'
import authRoutes from './routes/authRoutes.js';


dotenv.config();
const app = express();

app.use(express.json());


app.get("/" , (req , res)=>{
    res.send("welcome to bookbaaza.com")
    
})

app.use("/api/v1/auth" , authRoutes);


app.listen(process.env.PORT ,()=>{
    console.log("server mast chal rha hai")
})

