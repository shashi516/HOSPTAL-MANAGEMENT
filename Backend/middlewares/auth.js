import { User } from "../models/UserSchema.js";
import { CatchAsyncError } from "./CatchAsyncError.js";
import ErrorHandler from "./errorMiddlewares.js";
import jwt from "jsonwebtoken";

export const isAdminAuthenticated=CatchAsyncError(async(req,res,next)=>{
    const token=req.cookies.adminToken;
    if(!token){
        return next(new ErrorHandler("Admin is not Authenticated!",400));
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if(req.user.role !=="Admin"){
        return next(
            new ErrorHandler(
                `${req.user.role} not Authorized for this resources!`,
                403
            )
        );  
    }
    next();
});
export const isPatientAuthenticated=CatchAsyncError(async(req,res,next)=>{
    const token=req.cookies.patientToken;
    if(!token){
        return next(new ErrorHandler("Patient is not Authenticated!",400));
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if(req.user.role !== "Patient"){
        return next(
            new ErrorHandler(
                `${req.use.role} not Authorized for this resources!`,
                403
            )
        );
    }
    next();
});