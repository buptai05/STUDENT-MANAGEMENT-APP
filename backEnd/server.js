require("./connection");
const express = require("express");
var cors = require("cors");

const path=require("path");
const bodyparser = require("body-parser");
const app = express();
app.use(cors());

app.use('/uploads', express.static('uploads'));
app.use(bodyparser.urlencoded({ extended:true}));
app.use(bodyparser.json());


const controller = require("./routes/api");
const userController = require("./routes/entry");
app.use("/" , controller);
app.use("/api" , userController);

app.listen("3000", ()=> {console.log("server running"); });
