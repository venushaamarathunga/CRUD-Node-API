const express = require("express");
const router = express.Router();

const service = require("../services/product.service");

// get all products
router.get("/list", async (req, res) => {
  const products = await service.getAllProducts();
  res.send(products);
});

// get  product details
router.get("/:id", async (req, res) => {
  const product = await service.getProductById(req.params.id);
  if (product == undefined)
    res.status(404).json("no record with given id : " + req.params.id);
  else {
    res.status(200).json(product);
    res.send(product);
  }
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

// delete product details
router.delete("/:id", async (req, res) => {
  const productRow = await service.deleteProduct(req.params.id);
  if (productRow == 0)
    res.status(404).json("no record with given id : " + req.params.id);
  else res.status(200).json(productRow);
});

// update product details
router.put("/:id", async (req, res) => {
  const productRow = await service.updateProductById(req.body, req.params.id);
  if (productRow == 0)
    res.status(404).json("no record with given id : " + req.params.id);
  else res.status(200).json(productRow);
});

module.exports = router;
