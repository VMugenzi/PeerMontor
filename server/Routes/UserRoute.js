import express from "express";
import Validator from "../Middlewares/Validator.js";
import userController from "../Controllers/UserController";
import Datachecker from "../Middlewares/Datachecker.js";



const userRouter = express.Router();

userRouter.post("/signup",
Validator.newAccountRules(),
Validator.validateInput,
Datachecker.validateEmailDuplication,
Datachecker.checkAge,
userController.signupUser);


userRouter.get("/all",userController.getAllUsers);
userRouter.get("/:id",userController.getOneUser);
userRouter.patch("/:id",userController.updateOneUser);
userRouter.patch("/:id/role",userController.updateOneUserRole);
userRouter.delete("/:id",userController.deleteOneUser);
userRouter.get("/all/mentor",userController.getAllMentors);
userRouter.post("/signin", userController.signinUser);

export default userRouter;