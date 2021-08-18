import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    firstName: {type:String,
                require:[true,"first name is required"]},

    lastName: String,

    gender: {type:String, 
             enum:["female","male"]},

    phoneNumber: String,

    email: {type:String, 
            require:true, 
            unique:true},

    password:{type:String,
               default:"12345@"},
    
    age: Number,
    career:String,

    role:{type:String,
          enum:["admin","mentor","user"],
          default:"user"},

    status: {type:String,
             enum:["active","inactive"]}
    
});

const UserInfo = mongoose.model('User', UserSchema);

export default UserInfo;