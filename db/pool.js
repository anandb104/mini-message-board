const {pool}=require("pg");

module.exports=new pool({
    connectionString:"process.env.DATABASE_URL"
});