const express=require('express');
const app=express();
app.set("views",path.join(__dirname,"views"));
const path = require("node:path");
app.set("view engine","ejs");
const newrouter=require("./routes/newrouter.js");
const indexrouter=require("./routes/indexrouter.js");
indexrouter.use("/",indexrouter);
newrouter.use("/new",newrouter);




