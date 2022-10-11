const assert = require("assert");
const { shapeIntoMongooseobjectId } = require("../lib/config");
const Definer = require("../lib/mistake");
const ProductModel = require("../schema/product.model");

class Product {
    constructor() {
        this.productModel = ProductModel;
    }

    async getAllProductDataResto(member) {
        try {
            member._id = shapeIntoMongooseobjectId(member._id);
            const result = await this.productModel.find({
                restaurant_mb_id: member._id,
            });
            assert.ok(result, Definer.general_err1);
          
            return result;
        } catch(err) {
            throw err;
        }
    }
    
    async addNewProductData(data,member) {
        try {
            data.restaurant_mb_id = shapeIntoMongooseobjectId(member._id);
            
            const new_product = new this.productModel(data);
            const result = await new_product.save();

            assert.ok(result, Definer.product_err1);  
            return result;
 
        } catch(err) {
            throw err;
        }
    }
    async updateChosenProduct(id, updated_data, mb_id) {
        try {
            id = shapeIntoMongooseobjectId(id);
            mb_id = shapeIntoMongooseobjectId(mb_id);

            const result = await this.productModel
            .findOneAndUpdate({_id: id, restaurant_mb_id: mb_id}, updated_data, {
                runValidators: true,
                lean: true,
                returnDocument: "after",
        })
         .exec();

        assert.ok(result, Definer.general_err1);
        return result;
        } catch(err) {
            throw err;
        }
    }
}

module.exports = Product;