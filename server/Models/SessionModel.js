import mongoose from "mongoose";

const SessionSchema= new mongoose.Schema ({
    title:String,

    description:String,

    user:String,

    mentor:String,

    timeToStart:String,

    timeToEnd:String,

    status: {type:String,
        enum:["Pending","Declined","Aproved"], 
        default:"Pending"}
});

const SessionInfo=mongoose.model('Session',SessionSchema);

 export default SessionInfo;