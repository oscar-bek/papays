const Product = require("../models/Product");
const assert = require("assert");
const Definer = require("../lib/mistake");

 let productController = module.exports;

productController.getAllProducts = async (req, res) => {
    try {
        console.log("GET cont/getAllProducts");
    } catch(err) {
        console.log(`ERROR, getAllProducts, ${err.message}`);
        res.json({ state: "fail", message: err.message }); 
    }
}
productController.addNewProduct = async (req, res) => {
    try {
        console.log("POST cont/addNewProduct");
        assert(req.files, Definer.general_err3)

        const product = new Product();
        let data = req.body;

        data.product_images = req.files.map(ele => {
            return ele.path;
        });

        const result = await product.addNewProductData(data, req.member);
        const html = `<scrypt>
                       alert(new dish added successfully);
                       window.location.replace('/resto/product/menu');
                     </scrypt>`;
                     res.end(html);
        
             
         res.end("ok");
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
};