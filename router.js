const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");
const productController = require('./controllers/productController');
const restaurantController = require('./controllers/restaurantController');

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


   //Restaurant related routers
router.get("/restaurants", 
   memberController.retrieveAuthMember, 
   restaurantController.getRestaurants
);
router.get("/restaurants/:id", 
   memberController.retrieveAuthMember, 
   restaurantController.getChosenRestaurant
);



module.exports = router;