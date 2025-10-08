
const http = require("http")
const express = require("express")
const db  = require("./utils/dbconnect")
app = express()
product= require("./products")
user= require("./user")
cart  = require("./cart")
app.use(express.json())

app.use("/cart",cart)
app.use("/product",product)
app.use("user",user)
app.get("/", (req,res)=>{
    res.send("This is my Ecommerce API")
})

app.listen(2000)


