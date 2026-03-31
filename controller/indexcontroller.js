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
exports.newformpost=(req,res)=>{
    const name=req.body.name;
    const message=req.body.message;
    messages.push({
        text:message,
        user:name,
        added:new Date(),
    });
    res.redirect("/");
};
exports.messageget=(req,res)=>{
    const id=req.params.id;
    const message=messages[id-1];
    res.render("message",{message});
};