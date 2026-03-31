const express=require('express');
const app=express();
const path = require("node:path");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
const indexrouter=require("./routes/indexrouter");
app.use("/",indexrouter);
app.listen(3000,(error)=>{
    if(error){
        throw error;
    }
    console.log("Listening on port 3000");
});



