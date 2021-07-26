import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    phoneNumber: String,
    email: String,
    
});

const UserInfo = mongoose.model('User', UserSchema);

export default UserInfo;
