console.log("Web Serverni boshladik");
const express = require("express");
const app = express();
const router = require("./router");


// 1 Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 Session kodlari

// 3 Views kodlar
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing kodlar
//app.use("/resto", router_bssr);
app.use("/", router);

module.exports = app;
