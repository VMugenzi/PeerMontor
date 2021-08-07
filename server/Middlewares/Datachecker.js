import UserInfo from "../Models/UserModel";


class Datachecker{
static validateEmailDuplication= async (req, res, next)=>{

   //console.log("validation success");
   const email=await UserInfo.findOne({email:req.body.email}); 
   
   if (!email){
       return next();
   }
   return res.status(404).json({
       status:404,
       message:"Email already exist"
   })
}
static checkAge=(req, res, next)=>{
    if (req.body.age < 18){
        return res.status(404).json({
            status:404,
            message:"You are under age. No access"
        })
    }
    return next();
}

}
export default Datachecker;