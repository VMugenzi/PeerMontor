import express from "express";
import sessionController from "../Controllers/SessionController";



const sessionRouter = express.Router();

sessionRouter.post("/registersession",sessionController.registerSession);
sessionRouter.get("/all",sessionController.getAllSessions);
sessionRouter.get('/:id',sessionController.getOneSession);
sessionRouter.patch('/:id',sessionController.updateOneSession);
sessionRouter.patch('/:id/status',sessionController.approveSession);
sessionRouter.patch('/:id/statusdec',sessionController.declineSession);
sessionRouter.delete('/:id',sessionController.deleteOneSession);

export default sessionRouter;