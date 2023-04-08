
const mongoose=require("mongoose");

const TransferSchema=mongoose.Schema({ 

    toName:{
        type:String,
    },
    email:{
        type:String,
    },
    amount:{
        type:Number,
    },
    panNo:{
        type:String,
    }   
})
const TransferModel=mongoose.model("transfer",TransferSchema);

module.exports={TransferModel};