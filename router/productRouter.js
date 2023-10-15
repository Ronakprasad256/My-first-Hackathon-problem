const express = require("express");
const router = express.Router();
const productCtrl = require("../controller/productCtrl");

router.get("/", productCtrl.getAll);
router.post("/create", productCtrl.addProduct);
router.delete("/remove/:id", productCtrl.deleteProduct);

module.exports = router;







// 4th