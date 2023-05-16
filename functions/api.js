require("../ENV_SETTING/env_setting")();
const express = require("express");
const serverless = require("serverless-http"); 
const router = require("express").Router();
//const ejs = require("");
const app = express();


app.set("view engine","ejs");

router.get("/",(req,res)=>{
    //res.render("../view/index");
    console.log("ENVIROMENT: ",process.env.ENVIROMENT);
    res.json({"ALERT":"App page is workiiiiing"});
});

let PORT = process.env.PORT || 5000;
//console.log(__dirname);
app.listen(3000,()=>{
    console.log(`The app is running on port:${PORT}`);
});


app.use('/.netlify/functions/api',router);
module.exports.handler = serverless(app);