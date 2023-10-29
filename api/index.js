
// require('dotenv').config();
import { config } from 'dotenv';

import express from 'express';

import mongoose from 'mongoose';

config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to te db');
}).catch((err)=>{
    console.log(err);
})
;
// mongoose.connect("mongodb+srv://abhishek:abhishek@123@mern-estate.q3cjuuo.mongodb.net/mern-estate?retryWrites=true&w=majority")

const app = express();

app.listen(3000,()=>{
    console.log("Server is running on port 3000 !!!");
})
