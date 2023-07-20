const express = require("express")
const bcrypt = require("bcrypt");
const { UserModel }  = require("../models/UserModel");


const userRouter = express.Router()

userRouter.get("/" , (req, res) =>{
    res.send("all the users")
})

userRouter.post("/register" , async (req, res) => {
    const {name , email, password} = req.body
    bcrypt.hash(password, 5, async function(err, hash){
        if(err) return res.send({message : "something went wrong", status :0})
        try {
            let user = new UserModel({name,email,password:hash})
             await user.save()
             res.send({
                message : "user created",
                status : 1
             })
        }catch (error) {
            res.send({
                message : error.message,
                status:0
            })
        }
    })
})

module.exports = {userRouter}