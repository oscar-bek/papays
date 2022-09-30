const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");

/*************************************
 *         REST API                  *
 *************************************/

//memberga dahldor routerlar

router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);

//boshqa routerlar
router.get("/menu", (req, res) => {
    res.send("Menu sahifasidasiz");
});

router.get("/comunity", (req, res) => {
    res.send("Jamiyat sahifasidasiz");
});

module.exports = router;