const indexrouter=require("../routes/indexrouter");
const pool=require("../db/pool.js");
exports.indexlistget=async(req,res)=>{
    const result=await pool.query('SELECT * FROM messages');
    res.render("index",{
        messages:result.rows
    });
};
exports.newformget=(req,res)=>{
    res.render("newform");
};
exports.newformpost=async(req,res)=>{
    const name=req.body.name;
    const message=req.body.message;
    await pool.query('INSERT INTO messages (text,user_name) VALUES ($1,$2)',[message,name]);
    res.redirect("/");
};
exports.messageget=async(req,res)=>{
    const id=req.params.id;
    const row=await pool.query('SELECT * FROM messages WHERE id=$1',[id-1]);
    const message=row[0];
    res.render("message",{message});
};