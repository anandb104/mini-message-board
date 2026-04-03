require("dotenv").config();
const express=require('express');
const app=express();
const path = require("node:path");
app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static("images"));
app.set("view engine","ejs");
const indexrouter=require("./routes/indexrouter");
app.use("/",indexrouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Listening on port ${PORT}`);
});



