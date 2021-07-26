import express from "express";
import userController from "../Controllers/UserController";



const userRouter = express.Router();

userRouter.post("/signup",userController.signupUser);
userRouter.get("/all",userController.getAllUsers);

export default userRouter;