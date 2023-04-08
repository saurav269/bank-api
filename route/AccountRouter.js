const express=require("express");

const AccountRouter=express.Router();

const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { OpenAccountModel } = require("../model/OpenAccount.model");

AccountRouter.get("/printStatement",async(req,res)=>{
    try {
        const user=await OpenAccountModel.find();
        res.send(user)
    } catch (error) {
        res.send({"msg":"Failed to get Account","error":error})
    }
})
   AccountRouter.post("/openAccount",async(req,res)=>{
   
    const payload=req.body;
    try {     
            const user=new OpenAccountModel(payload);
            await user.save();
            res.send("New Account created!!")         
        
    } catch (error) {
        res.send({"msg":"Unable to create Account","error":error})
    }
})

AccountRouter.patch("/updateKYC/:id",async(req,res)=>{
    const {name, dob, email, mobile, adharNo, panNo}=req.body
    const ID=req.params.id;
    try {
        await OpenAccountModel.findByIdAndUpdate({ _id: ID },{name, dob, email, mobile, adharNo, panNo});
        res.send({msg:`KYC with id:${ID} has been updated`})
    } catch (error) {
        res.status(400).send({ message: err.message });
    }
})

AccountRouter.patch("/depositMoney/:id",async(req,res)=>{
    const account=req.body;
    const ID=req.params.id;
    const {initialBalance}=account
    try {
        await OpenAccountModel.findByIdAndUpdate({ _id: ID },{initialBalance});
        res.send({msg:`Deposite Money with id:${ID} has been updated`})
    } catch (error) {
        res.status(400).send({ message: err.message });
    }
})

AccountRouter.patch("/withdrawMoney/:id",async(req,res)=>{
    const account=req.body;
    const ID=req.params.id;
    const {initialBalance}=account
    try {
        await OpenAccountModel.findByIdAndUpdate({ _id: ID },{initialBalance});
        res.send({msg:`Deposite Money with id:${ID} has been updated`})
    } catch (error) {
        res.status(400).send({ message: err.message });
    }
})
AccountRouter.post("/transferMoney/:id",async(req,res)=>{
    const account=req.body;
    const ID=req.params.id;
    const {toName, email, PanNo, amount}=account
    try {
        await OpenAccountModel.findByIdAndUpdate({ _id: ID },{toName, email, PanNo, amount});
        res.send({msg:`Transfer Money with id:${ID} has been added`})
    } catch (error) {
        res.status(400).send({ message: err.message });
    }
})

AccountRouter.delete("/closeAccount/:id",async(req,res)=>{
    const ID = req.params.id;
    try {
      await OpenAccountModel.findByIdAndDelete({ _id: ID });
      res.send({msg:`Account with id:${ID} has been deleted`})
    } catch (err) {
      res.status(500).send({ message: err.message });
    }

})

module.exports={AccountRouter}