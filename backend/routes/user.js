const express = require("express");
const {User,Account} = require("../db");
const { z } = require("zod")
const jwt = require("jsonwebtoken")
const JWT_SECRET  = require("../config")
const authMiddleware  = require("../middleware")

const router = express.Router()

const signupBody = z.object({
    username: z.string().email(),
    firstname:z.string(),
    lastname:z.string(),
    password:z.string()

})

router.post("/signup", async (req,res) => {
    const { success } = signupBody.safeParse(req.body)

    if (!success){
        return res.status(411).json({
            message:"Email already taken / Incorrect inputs !"
        })
    }

    const existuser = await User.findOne({
        username: req.body.username
    })

    if (existuser){
        return  res.status(411).json({
            message:"Email already taken / Incorrect inputs !"
        })
    }

    const user = await User.create({
        username:req.body.username,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname
    })

    const userId = user._id

    //-----creating new account------------//
    await Account.create({
        userId:userId,
        balance:1+Math.random()*10000
    })

    //-------------------------------------//

    console.log(JWT_SECRET)

    const token = jwt.sign({
        userId:userId,
    }, JWT_SECRET)

    res.json({
        message:"User created successfully",
        token:token
    })
})

const signinBody = z.object({
    username:z.string().email(),
    password:z.string()
})

router.post("/signin", async (req,res) => {
    const { success } = signinBody.safeParse(req.body)
    
    if (!success){
        res.status(411).json({
            message:"Incorrect Inputs"
        })
    }

    const user = await User.findOne({
        username:req.body.username,
        password:req.body.password
    })

   

    if (user){
        const token = jwt.sign({
            userId:user._id,
        },JWT_SECRET);

        res.json({
            token:token
        })
        return;
    }

    res.status(411).json({
        message:"Error while logging in"
    })
})

const updateBody = z.object({
    password:z.string().optional(),
    firstname:z.string().optional(),
    lastname:z.string().optional()
})

router.put("/",authMiddleware, async (req,res) => {
    const { success } = updateBody.safeParse(req.body)

    if (!success){
        res.status(411).json({
            message:"error while updating information"
        })
    }

    await User.updateOne({_id:req.userId},req.body)

    res.json({
        message:"Updated successfully"
    })
})

router.get("/bulk", async (req,res) => {
    const filter = req.query.filter || "";

    const users = User.find({
        $or:[{
            firstname:{
                $regex:filter
            },
            lastname:{
                $regex:filter
            }
        }]
    })

    res.json({
        user:users.map(user => ({
            username:user.username,
            firstname:user.firstname,
            lastname:user.lastname,
            _id:user._id
        }))
    })
})

module.exports = router;