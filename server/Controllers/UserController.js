import UserInfo from "../Models/UserModel";

class userController{
//sign up function
static signupUser = async(req,res)=> {
const user = await UserInfo.create(req.body);

if (!user){
    return res.status(400).json({
        status:400,
        message: "failed to register"
    });

}
return res.status(200).json({
    status: 200,
    message: "success",
    data:user
});
}
static getAllUsers =async(req,res)=>{
    const users =await UserInfo.find();
    if (!users){
        return res.status(404).json({
            status:404,
            message: "failed to get all users"
        });  
      }
      return res.status(200).json({
          status: 200,
          message: "success",
          data:users
      });
}
static getOneUser=async(req,res)=>{
const user = await UserInfo.findById(req.params.id);
if (!user){
    return res.status(404).json({
        status:404,
        message: "failed to get the user"
    });
}
return res.status(200).json({
status:200,
message: "Got one user",
data:user
});
}
static updateOneUser=async(req,res)=>{
    const user= await UserInfo.findByIdAndUpdate(req.params.id,req.body);
    if(!user){
        return res.status(404).json({
            status: 404,
            message: "User not found"
        });
        }
        const updatedUser= await UserInfo.findById(req.params.id);
        return res.status(200).json({
            status: 200,
            message: "user successfully updated",
            data: updatedUser
        });
}
static deleteOneUser=async(req,res)=>{
    const user = await UserInfo.findByIdAndDelete(req.params.id);
    if (!user){
        return res.status(404).json({
            status:404,
            message: "user not found"
        });  
    }
    return res.status(200).json({
    status:200,
    message: "sucessfully deleted",
    data:user
    });
}


}




export default userController;