const {Router}=require("express");
const indexrouter=Router();
const usercontroller=require("../controller/indexcontroller.js");
indexrouter.get("/",usercontroller.indexlistget);
indexrouter.get("/new",usercontroller.newformget);
indexrouter.post("/new",usercontroller.newformpost);
indexrouter.get("/message/:id",usercontroller.messageget);
module.exports=indexrouter;
  