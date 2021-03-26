


const errorHandler =(err,req,res,next)=>{
    const {statusCode = 500,message,data}=err;
    console.log(err);
    res.status(statusCode).json({message,error:data});
}

module.exports=errorHandler;