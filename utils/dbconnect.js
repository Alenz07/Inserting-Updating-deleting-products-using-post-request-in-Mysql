const mysql = require("mysql2")
const connection = mysql.createConnection({
    host : "localhost",
    user: "root",
    password : "database",
    database: "first",
    port: 3300
})
connection.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log("Conncetion is made")
})
const table = `create table if not exists products(
name varchar(10),
price int,
product_id int)`
connection.query(table,(err,res)=>{
    if(err){
        console.log(err)
    }
    console.log("Table is created")
})
module.exports =  connection
