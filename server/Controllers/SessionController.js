import SessionInfo from "../Models/SessionModel";
class sessionController{

    static registerSession = async(req,res)=> {
        const session= await SessionInfo.create(req.body);
        if (!session){
            return res.status(400).json({
                status:400,
                message: "failed to register the session"
            
            });
        }
    return res.status(200).json({
        status:200,
        message: "successful registered the session",
        data:session
    
    });
    }
static getAllSessions = async(req,res)=>{
    const sessions = await SessionInfo.find();
    if (!sessions){
        return res.status(404).json({
            status:404,
            message:"all session not found"
        });
    }
    return res.status(200).json({
        status:(200),
        message:"success, These are the registered sessions",
        data: sessions
    });
}
static getOneSession=async(req,res)=>{
    const session=await SessionInfo.findById(req.params.id);
    if (!session){
        return res.status(404).json({
            status:404,
            message: "The session is not found"
        });
    }
    return res.status(200).json({
        status:200,
        message:"Success",
        data:session
    });
}
static updateOneSession= async(req,res)=>{
    const session=await SessionInfo.findByIdAndUpdate(req.params.id,req.body);
    if (!session){
        return res.status(404).json({
            status:404,
            message: "The session is not found"
        });
    }
    const updatedSession= await SessionInfo.findById(req.params.id);
    return res.status(200).json({
        status: 200,
        message: "The Session is successful updated",
        data: updatedSession
    });
}
static deleteOneSession=async(req,res)=>{
    const session=await SessionInfo.findByIdAndDelete(req.params.id);
    if (!session){
        return res.status(404).json({
            status:404,
            message: "The session is not found"
        });   
    }
    return res.status(200).json({
        status: 200,
        message: "The Session is successful deleted",
        data:session
    });
}
}

export default sessionController;