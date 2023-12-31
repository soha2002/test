const posts = require('../helper/posts.json')

exports.getallposts=(req , res)=>{
    res.json({
        msg : posts,
        
    })
}