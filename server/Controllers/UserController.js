import UserInfo from "../Models/UserModel";
import TokenAuth from "../Helpers/TokenAuth";

class userController{

    static signinUser = async (req, res) =>{
        const {email,password}= req.body;
       const user = await UserInfo.findOne({email:email,password:password});
    if (!user){
        return res.status(404).json({
            status: 404,
            message:"user does not exist"
        })
    }
    const token=TokenAuth.tokenGenerator({
        id:user._id,
        email:user.email
    })
    return res.status(200).json({
        status:200,
        message:"sucessfully logged in",
        token: token,
        data:user
    });
 
}



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

static updateOneUserRole= async(req,res) =>{
   const data =await UserInfo.findById(req.params.id);
   let role;

   if (data.role == "user"){
      
    role="mentor";
    
   }
   else
   (role="user");

const user= await UserInfo.findByIdAndUpdate(req.params.id,{role:role});
if (!user){
    return res.status(404).json({
        status:404,
        message: "user not found"
    })
}
const updatedUser=await UserInfo.findById(req.params.id);
return res.status(200).json({
    status:200,
    message:"successfully",
    data:updatedUser
})

}

static getAllMentors =async (req,res)=>{
    const users = await UserInfo.find({role:"mentor"});

    if (!users){
        return res.status(404).json({
            status:404,
            message: "failed to get all mentors"
        })
    }
    return res.status(200).json({
        status:200,
        message:"sucessfully got all mentors",
        data: users
    })
}




}




export default userController;