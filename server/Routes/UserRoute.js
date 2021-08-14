import express from "express";
import Validator from "../Middlewares/Validator.js";
import userController from "../Controllers/UserController";
import Datachecker from "../Middlewares/Datachecker.js";
import verifyToken from "../Middlewares/verifyToken.js";
import verifyAccess from "../Middlewares/verifyAccess";





const userRouter = express.Router();

userRouter.post("/signup",
Validator.newAccountRules(),
Validator.validateInput,
Datachecker.validateEmailDuplication,
Datachecker.checkAge,
userController.signupUser);


userRouter.get("/all",userController.getAllUsers);
userRouter.get("/:id",verifyToken,verifyAccess("user"),userController.getOneUser);
userRouter.patch("/:id",userController.updateOneUser);
userRouter.patch("/:id/role",verifyToken,verifyAccess("admin"),userController.updateOneUserRole);
userRouter.delete("/:id",userController.deleteOneUser);
userRouter.get("/all/mentor", verifyToken, verifyAccess("user"),userController.getAllMentors);
userRouter.post("/signin", userController.signinUser);

export default userRouter;