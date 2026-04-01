require("dotenv").config();
const {Client}=require("pg");
const SQL=`CREATE TABLE IF NOT EXISTS messages(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
text TEXT not NULL,
user_name VARCHAR(255) not NULL,
added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO messages (text,user_name)
VALUES ('Hi There','Amando'),
('Hello World','Charles');`

async function main(){
    console.log("Seeding..");
    const client=new Client({
        connectionString:process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
          }
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}
main();