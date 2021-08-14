import express from "express";
import sessionController from "../Controllers/SessionController";
import verifyToken from "../Middlewares/verifyToken";
import verifyAccess from "../Middlewares/verifyAccess";


const sessionRouter = express.Router();

sessionRouter.post("/registersession",verifyToken,verifyAccess("user"),sessionController.registerSession);
sessionRouter.get("/all",sessionController.getAllSessions);
sessionRouter.get('/:id',sessionController.getOneSession);
sessionRouter.patch('/:id',sessionController.updateOneSession);
sessionRouter.patch('/:id/status',verifyToken,verifyAccess("mentor"),sessionController.approveSession);
sessionRouter.patch('/:id/statusdec',verifyToken,verifyAccess("mentor"),sessionController.declineSession);
sessionRouter.delete('/:id',sessionController.deleteOneSession);

export default sessionRouter;