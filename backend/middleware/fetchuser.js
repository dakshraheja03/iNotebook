const jwt = require('jsonwebtoken');
const JWT_SECRET="dakshisagood$boy"

const fetchuser=(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        return res.status(401).send({error:"Please enter a valid token"})
    }
    try{
        const data=jwt.verify(token,JWT_SECRET)
        req.user=data.user
    next()
    }
    catch(err){
        console.error(err.message)
        return res.status(401).send({error:"Please enter a valid token"}) 
    }
}

module.exports= fetchuser;