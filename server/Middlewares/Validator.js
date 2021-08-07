import {check,validationResult} from "express-validator";

class  Validator {

    static validateInput=(req,res,next)=>{
        const errors=validationResult(req);
        if (!errors.isEmpty()){
            const errorMessage= errors.errors.map((err)=>err.msg);
            return res.status(400).json({
                status:400,
                message: errorMessage
            }) 
        }
    return next ();

    }

    static newAccountRules(){
        return [
            check ("email","Please your email is invalid").isEmail(),
            check ("firstName","Please your first name has special characters").isAlpha(),
            check ("lastName","Please your last name has special characters").isAlpha(),
            check ("gender","Please your gender is invalid").isIn(['male','female']),
            check ("phoneNumber","Please your phone number is invalid").isMobilePhone(),
            check ("age","Please your age should be interger").isInt(),
            check ("password","Please your password must be strong").isStrongPassword()
        ];
    }








}
export default Validator;