import express from "express";

const app=express();
app.listen(4040,()=>{
    console.log('Server is running on port 4040');

});
export default app;
