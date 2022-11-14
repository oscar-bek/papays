const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");
const productController = require('./controllers/productController');

/*************************************
 *         REST API                  *
 *************************************/

//memberga dahldor routerlar

router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);
router.get("/check-me", memberController.checkMyAuthentication);
router.get("/member/:id",
    memberController.retrieveAuthMember,
    memberController.getChosenMember
);        //param orqali 


// Products ga dahldor routerlar
router.post("/products",
    memberController.retrieveAuthMember,
    // memberController.getChosenMember,
    productController.getAllProducts);

router.get("/products/:id",
    memberController.retrieveAuthMember,
    productController.getChosenProduct);
   //param orqali


   //boshqa routerlar 
router.get("/menu", function(req, res) {
    res.send("You are on MenuPage");
});

router.get("/community", function(req, res) {
    res.send("You are on CommunityPage");
});

module.exports = router;