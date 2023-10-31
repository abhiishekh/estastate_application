
import {config} from 'dotenv';
import express from 'express';
import userRouter from './routes/user.routes.js'
import mongoose from 'mongoose';

config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

const app = express();
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} !!!`);
})


app.use("/api/user",userRouter);