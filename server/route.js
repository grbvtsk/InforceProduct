const express = require("express");
const productsController = require('./controller')
const router = express.Router();

router.
    route("/")
    .get(productsController.getAllProducts)
    .post(productsController.createProduct)

router.route("/:id")
    .delete(productsController.deleteProduct)
module.exports = router;
