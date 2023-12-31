exports.checkusers=(req , res , next)=>{
    if(req.body.username === 'soha'){
        next();
        return
    }
    res.json({
        msg : 'you are not authorized for this operation',
        state : 0
    })
}