import jwt, { decode } from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: "Unauthorized - No token provided"});
        }
        const decoded = jwt.verify(token,process.env.JWT_KEY);
        if(!decoded){
            return res.status(401).json({error: "Unauthorized - Invalid token"});
        }
        const user = await User.findById(decoded.userId).select("-password");
        if(!token){
            return res.status(401).json({error: "User not found"});
        }
        req.user = user;
        next();//call next fnc sendMessage in routes
    } catch (error) {
        console.log("Error in protectRoute middleware:",error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export default protectRoute;