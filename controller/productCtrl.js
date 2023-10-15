const productRepo = require("../repos/productRepo");

const getAll = async (req, res) => {
    try {
        const products = await productRepo.get();
        res.status(200);
        res.json(products)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server error");
    }
};

const addProduct = async (req, res) => {
    try {
        const data = req.body;
        await productRepo.create(data);
        res.status(201).send("product Added")
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server error");
    }
};

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await productRepo.remove(id);
        res.status(204)
        res.send("Deleted")
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server error");
    }
};

module.exports = {
    getAll,
    addProduct,
    deleteProduct,
};







// 3rd