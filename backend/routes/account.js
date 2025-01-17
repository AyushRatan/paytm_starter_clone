const express = require("express")
const authMiddleware = require("../middleware")
const {User,Account} = require("../db")
const { default: mongoose } = require("mongoose")

const router = express.Router()


router.get("/balance", authMiddleware, async (req,res) => {
    const account = await Account.findOne({
        userId:req.userId
    });

    res.json({
        balance:account.balance
    })
})


router.post("/transfer", authMiddleware, async (req,res) => {
    const session = await mongoose.startSession()

    session.startTransaction();
    const {amount,to} = req.body;

    //fetch the accounts within the transaction
    const account = await Account.findOne({userId:req.userId}).session(session);
    console.log(account)
    if (!account || account.balance < amount){
        await session.abortTransaction();
        res.status(400).json({
            message:"Insufficient balance"
        });
    }

    const toaccount = await Account.findOne({userId:to}).session(session);
    console.log(toaccount)
    if (!toaccount){
        await session.abortTransaction()
        res.status(400).json({
            message:"Invalid account"
        })
    }

    // perform the transaction
    await Account.updateOne({userId:req.userId},{$inc:{balance:-amount}}).session(session);
    await Account.updateOne({userId:to},{$inc:{balance:amount}}).session(session);

    //commit the transaction
    await session.commitTransaction()
    res.json({
        message:"Transfer successful"
    });

});

module.exports = router;
