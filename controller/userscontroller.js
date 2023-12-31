
exports.login=(req , res)=>{
    res.json({
     msg :"you are logged in"
    })
}
exports.signup=(req , res)=>{
  
    res.json ({
        msg :"the register is successfully",
        state : 1
    })
}

exports.getalluserssalary=(req , res) =>{
    res.json({
        state : 1,
        salary : [1,80,65,77]
    })
}