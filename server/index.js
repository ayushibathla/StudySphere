import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import msgrouter from './router/msgRouter.js';

dotenv.config();

const app = express();
const port = process.env.PORT ||5000;

mongoose.connect(process.env.MONGO_DB)
  .then(()=>{
    console.log("Connected to Database!");
  }
  )
  .catch(
    (err)=>{
      console.log("Some error occured while connecting to database",err);
    }
  )
 

app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true,
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/contact",msgrouter);

app.listen(port,()=>{
  console.log(`server running on port ${port}`);
})