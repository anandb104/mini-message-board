const indexrouter=require("../routes/indexrouter");
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
exports.indexlistget=(req,res)=>{
    res.render("index",{
        messages:messages
    });
};
exports.newformget=(req,res)=>{
    res.render("newform");
};
