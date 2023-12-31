exports.signup=(req , res , next)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const phone = req.body.phone;
    if(username.trim() === "" || password.trim() === "" || email.trim() === "" || phone.trim() == ""){
        return res.json({
            msg:"enter all data please",
            state : 0
        })
    }
   next()
}
exports.login=(req , res , next)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    if(!username.trim()  || !password.trim()){
        return res.json({
            msg:"enter all data please",
            state : 0
        })
    } 
    if(password==='0000'){   
    return next()
}
    res.json('the password is incorrect')
}
