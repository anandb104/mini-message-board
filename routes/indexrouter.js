const {Router}=require("express");
const indexrouter=Router();
const usercontroller=require("../controller/indexcontroller.js");
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  indexrouter.get("/",usercontroller.indexlistget);
  module.exports=indexrouter;
  