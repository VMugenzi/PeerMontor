import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
class TokenAuth{
static tokenGenerator(data){
        const token = jwt.sign(data, process.env.JWTKEY,{expiresIn:"1h"});

        return token;
    }


static getDataFromToken(token){
    const data=jwt.verify(token,process.env.JWTKEY);
    return data;
}

}
export default TokenAuth;