
import {config} from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.route.js'

config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

const app = express();

app.use(express.json());
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} !!!`);
})


app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);