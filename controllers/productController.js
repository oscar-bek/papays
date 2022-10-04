let productController = module.exports;


productController.getAllProducts = async (req, res) => {
    try {
        console.log("GET cont/getAllProducts");

    } catch(err) {
        console.log(`ERROR, getAllProducts, ${err.message}`);
        res.json({ state: "fail", message: err.message }); 
    }
}
productController.addNewProduct= async (req, res) => {
    try {
        console.log("POST cont/addNewProduct");
        console.log(req.member);
             // todo: product creation develop
    
    } catch(err) {
        console.log(`ERROR, addNewProduct, ${err.message}`);
         
    }
}
productController.updateChosenProduct = async (req, res) => {
    try {
        console.log("POST cont/updateChosenProduct");

    } catch(err) {
        console.log(`ERROR, updateChosenProduct, ${err.message}`);
       
    }
}