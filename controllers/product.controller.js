const express = require("express");
const router = express.Router();

const service = require("../services/product.service");

// get all products
router.get("/list", async (req, res) => {
  const products = await service.getAllProducts();
  res.send(products);
});

// create one product
router.post("/", async (req, res) => {
  const { name, quantity, price, image } = req.body;
  try {
    const newProduct = await service.createProduct(
      name,
      quantity,
      price,
      image
    );
    res
      .status(201)
      .send({ message: "created successfully.", data: newProduct });
  } catch (err) {
    res
      .status(400)
      .send({ message: err.message || "Failed to create product" });
  }
});

module.exports = router;
