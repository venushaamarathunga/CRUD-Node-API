const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./db");
const productRoutes = require("./controllers/product.controller");

const corsOptions = {
  origin: "http://localhost:3000", // Frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Methods that you want to allow
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/product", productRoutes);

db.query("select 1")
  .then(() => {
    console.log("DB connection succeeded!");
    app.listen(process.env.PORT, () => {
      console.log(`Server is runnig on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("db connection failed. \n" + err));
