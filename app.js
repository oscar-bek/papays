console.log("Web Serverni boshladik");
const express = require("express");
const app = express();

// MongoDB connect
const db = require("./server").db(); 
const mongodb = require("mongodb");

// 1 Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 Session kodlari

// 3 Views kodlar
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing kodlar

module.exports = app;
