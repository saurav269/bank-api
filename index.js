const express = require('express');

const app = express();

const cors = require('cors'); 
const { AccountRouter } = require('./route/AccountRouter');
const { connection } = require('./config/db');

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Masai Bank');
});

app.use("/account", AccountRouter);

app.listen(7500, async() =>{

    try{   
        await connection
        console.log("Server is running on port 7500")
    }catch(err){
        console.log(err)
    }

 })