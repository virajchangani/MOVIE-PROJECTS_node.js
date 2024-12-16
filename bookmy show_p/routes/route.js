const express = require("express");
const route = express.Router();
const multer = require("multer");
const ctl = require("../controller/ctl");

const Storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null , "uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null, file.fieldname + "-" + Date.now());
    }
});

const upload = multer({storage:Storage}).single("image");

route.get("/",ctl.frist);

route.get("/addData" , ctl.addData);

route.post("/addData" ,upload, ctl.add);

route.get("/deleteData" , ctl.delete);

route.get("/editData" , ctl.edit);

route.post("/updateData" ,upload, ctl.update);

module.exports = route;