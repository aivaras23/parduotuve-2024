import  jwt  from "jsonwebtoken";

const authMiddleware=(req:any,res:any, next:any)=>{
    try{
        const token=req.headers.auth;
        jwt.verify(token,   "kk59444gsd4r9+-eyery64er94ty9wer49erh4");
        next();
        
    }catch(error){
        return res.status(401).json({
            'text':'Nepateiktas arba neteisingas JWT'
        });

    }
    
}

export { authMiddleware };