const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")

const AuthMiddleware = (req, res, next) =>{
    const token = req.headers.authorization;
    const words = token.split(' ');
    const jwtToken = words[1];

    try{
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if(decodedValue.username){
            req.user = decodedValue;
            next();
        } else{
            res.status(403).json({
                msg: "Not Authorized"
            })
        }
    } catch(error){
        res.json({
            msg: "Incorrect inputs"
        })
    }

}

module.exports = {
    AuthMiddleware
}
