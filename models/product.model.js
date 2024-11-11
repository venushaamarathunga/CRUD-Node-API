const MySQL = require("mysql");

const ProductSchema = MySQL.createPool(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    image: { type: String, required: false },
  },
  { timestamps: true }
);

const product = MySQL.createPoolCluster("product", ProductSchema);

/*
const MySQL = require("mysql");

const ProductSchema = MySQL.createPool(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    image: { type: String, required: false },
  },
  { timestamps: true }
);

const product = MySQL.createPoolCluster("product", ProductSchema);
*/
