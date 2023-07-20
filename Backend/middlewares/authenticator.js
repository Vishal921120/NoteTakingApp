const jwt = require("jsonwebtoken")

function authenticator(req, res, next){
    const token  = req.headers.authorization
    jwt.verify(token, "Vishal", (err,decode) => {
        if(err) return res.send({
            message : "Token isn't valid please login",
            status : 2
        })
        if(decode){
            req.body.user = decode.userId
            next()
        }else{
            res.send({
                message : "Token isn't valid please login",
                status : 2
            })
        }
    })
}

module.exports = {
    authenticator,
}



// In header of thunder clinet you need to put your token which you will get when 
// you login through it. copy the token and put it into header section of autherization.