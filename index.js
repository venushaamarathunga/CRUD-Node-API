const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./db");
const productRoutes = require("./controllers/product.controller");

app.use(cors());

app.use(express.json());

app.use("/api/products", productRoutes);

db.query("select 1")
  .then(() => {
    console.log("DB connection succeeded!");
    app.listen(process.env.PORT, () => {
      console.log(`Server is runnig on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("db connection failed. \n" + err));
