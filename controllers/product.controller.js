const express = require("express");
const router = express.Router();

const service = require("../services/product.service");

router.get("/", async (req, res) => {
  const products = await service.getAllEmployees();
  res.send(products);
});

module.exports = router;
