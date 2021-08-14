import mongoose from "mongoose";

const SessionSchema= new mongoose.Schema ({
    title:String,

    description:String,

    user:{type:mongoose.Schema.ObjectId,
        ref:"user"
         },

    mentor:{type:mongoose.Schema.ObjectId,
        ref:"mentor"},

    timeToStart:String,

    timeToEnd:String,

    status: {type:String,
        enum:["Pending","Declined","Aproved"], 
        default:"Pending"}
});

SessionSchema.pre(/^find/, function(next){
    this.populate({
        path:"user",
        select:"firstName lastName email phoneNumber gender"
    }).populate({
        path:"mentor",
        select:"firstName lastName email phoneNumber gender"
    });
    next();
})

const SessionInfo=mongoose.model('Session',SessionSchema);

 export default SessionInfo;