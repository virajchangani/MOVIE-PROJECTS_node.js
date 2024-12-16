const express = require("express");
const port = 3000;
const db = require("./config/db");
const path = require("path");
const fs = require("fs");
const app = express();

app.set("view engine" , "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/route"));
app.use("/uploads", express.static(path.join(__dirname,"uploads")));
app.use("/public",express.static(path.join(__dirname,"public")));

app.listen(port, (err)=>{
    err ? console.log(err) : console.log("server is start : " + port); 
});