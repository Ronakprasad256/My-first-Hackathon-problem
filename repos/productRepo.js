const productModel = require("../model/productModel");

const get = () => {
    return productModel.find();
};

const create = (data) => {
    const product = new productModel(data);
    return product.save();
};

const remove = (id) => {
    return productModel.findOneAndDelete({ _id: id });
};

module.exports = {
    get,
    create,
    remove,
};







// 2nd