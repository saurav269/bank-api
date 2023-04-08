const mongoose=require("mongoose");

const openAccountSchema=mongoose.Schema({ 
    name:{
        type:String,
    },
    gender:{
        type:String,
    },
    dob:{
        type:Date,
    },
    email:{
        type:String,
    },
    mobile:{
        type:Number,
    },
    initialBalance:{
        type:Number,
    },
    adharNo:{
        type:Number,
    },
    panNo:{
        type:String,
    } 
})

const OpenAccountModel=mongoose.model("account",openAccountSchema);

module.exports={OpenAccountModel};