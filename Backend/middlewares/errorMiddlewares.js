class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}

export const errorMiddlewares=(err,req,res,next)=>{
    err.message=err.message||"internal Server Error";
    err.statusCode=err.statusCode || 500;

    if(err.code===11000){
        const message= `Duplicate ${Object.keys(err.keysValue)} Entered`;
        err=new ErrorHandler(message,400);
    }

    if(err.name==="JsonWebTokenError"){
        const message= "Json web token is invalid, try Again!";
        err=new ErrorHandler(message,400);
    }

    if(err.name==="TokenExpiredError"){
        const message= "Json web token is Expired, try Again!";
        err=new ErrorHandler(message,400);
    }

    if(err.name==="CastError"){
        const message= `Invalid ${err.path}`;
        err=new ErrorHandler(message,400);
    }

    const errorMessage=err.errors ? Object.values(err.errors).map((error)=>error.message).join(" "):err.message;    

    return res.status(err.statusCode).json({
        success:false,
        message:errorMessage,
    })
    
}
export default ErrorHandler;