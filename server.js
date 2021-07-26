import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./server/Routes/UserRoute";
import bodyParser from"body-parser";

dotenv.config({path: './.env'});
const app=express();


app.use(bodyParser.json());
app.use("/PeerMontor/v1/user",userRouter);
const databaseUrl=process.env.DATABASE;

mongoose.connect(databaseUrl,{useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify: false}).then(()=>console.log("Database connected sucessfully"));



app.listen(4040,()=>{
    //console.log(databaseUrl)
    console.log('Server is running on port 4040');

});


export default app;
