import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export default class TokenAuth{
static tokenGenerator(data){
        const token = jwt.sign(data, process.env.JWTKEY,{expiresIn:"1h"});

        return token;
    }
}