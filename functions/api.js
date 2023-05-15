const express = require("express");
const serverless = require("serverless-http"); 
const router = require("express").Router();
//const ejs = require("");
const app = express();
require("dotenv").config();

app.set("view engine","ejs");

app.use('/.netlify/functions/api',router);

router.get("/",(req,res)=>{
    //res.render("../view/index");
    res.json({"ALERT":"App page is workiiiiing"});
});

let PORT = process.env.PORT || 5000;
console.log(__dirname);
app.listen(3000,()=>{
    console.log(`The app is running on port:${PORT}`);
});


module.exports.handler = serverless(app);