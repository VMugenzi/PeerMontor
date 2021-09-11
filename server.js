import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./server/Routes/UserRoute";
import sessionRouter from "./server/Routes/SessionRoute.js";
import bodyParser from"body-parser";
import cors from "cors";

dotenv.config({path: './.env'});
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use("/PeerMontor/v1/user",userRouter);
app.use("/PeerMontor/v1/session",sessionRouter);
app.use('/',(req,res)=>{
          res.status(404).send({
          status:404,
          message:"This Route does not exist"
    })
})

const databaseUrl=process.env.DATABASE;
mongoose.connect(databaseUrl,{useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify: false}).then(()=>console.log("Database connected sucessfully"));

const port= process.env.PORT;

app.listen(port,()=>{
    //console.log(databaseUrl)
    console.log(`Server is running on ${port}`);

});


export default app;
