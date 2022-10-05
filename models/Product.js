const assert = require("assert");
const { shapeIntoMongooseobjectId } = require("../lib/config");
const ProductModel = require("../schema/product.model");

class Product {
    constructor() {
        this.productModel = ProductModel;
    }
    
    async addNewProductData(data,member) {
        try {
            data.restaurant_mb_id = shapeIntoMongooseobjectId(member._id);
           

            const new_product = new this.productModel(data);
            const result = await new_product.save();
            return result;

            assert.ok(result, Definer.product_err1);            
            return true;
        } catch(err) {
            throw err;
        }
    }
}

module.exports = Product;