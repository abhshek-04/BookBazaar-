import express from 'express';
import dotenv from "dotenv";
import cors from 'cors'


dotenv.config();
const app = express();



app.get("/" , (req , res)=>{
    res.send("kya haal hai bhai")
    
})



app.listen(process.env.PORT ,()=>{
    console.log("server mast chal rha hai")
})

