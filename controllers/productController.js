const Product = require("../models/Product");
const assert = require("assert");
const Definer = require("../lib/mistake");

let productController = module.exports;

/***************************************************
 *           REST API RELATED PRODUCT METHODS         *
 **************************************************/

productController.getAllProducts = async (req, res) => {
    try {
        console.log("POST: cont/getAllProducts");
        const product = new Product();
        const hello = await product.getAllProductsData(req.member, req.body);
        
        res.json({ state: "success", data: hello });        
    } catch (err)
    {
        console.log(`ERORR, cont/getAllProducts, ${err.message}`);
        res.json({ state: "fail", message: err.message });
    }
}

productController.getChosenProduct = async (req, res) => {
    try {
        console.log("GET: cont/getChosenProduct");
        const product = new Product();
        const id = req.params.id;
        const result = await product.getChosenProductData(req.member, id);    //await missed :)
        
        res.json({ state: "success", data: result });        
    } catch (err)
    {
        console.log(`ERORR, cont/getChosenProduct, ${err.message}`);
        res.json({ state: "fail", message: err.message });
    }
}

/***************************************************
 *            BSSR RELATED PRODUCT METHODS         *
 **************************************************/

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
        const html = `<script>
                       alert('new product added successfully');
                       window.location.replace('/resto/products/menu');
                     </script>`;
        res.end(html);
        
    } catch(err) {
        console.log(`ERROR, addNewProduct, ${err.message}`);
         
    }
};

productController.updateChosenProduct = async (req, res) => {
    try {
        console.log("POST cont/updateChosenProduct");
        const product = new Product();
        const id = req.params.id;
        const result = await product.updateChosenProduct(
            id, 
            req.body, 
            req.member._id
            );
        await res.json({state: "success", data: result});
;    } catch(err) {
        console.log(`ERROR, updateChosenProduct, ${err.message}`);
        res.json({ state: "fail", message: err.message });
       
    }
};