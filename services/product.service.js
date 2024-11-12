const db = require("../db");

module.exports.getAllProducts = async () => {
  const [records] = await db.query("SELECT * FROM products");
  return records;
};

module.exports.getProduct = async (id) => {
  const [record] = await db.query(`SELECT * FROM products WHERE id = (?)`, [
    id,
  ]);
  return record;
};

module.exports.createProduct = async (name, quantity, price, image) => {
  const [record] = await db.query(
    `INSERT INTO products (name, quantity, price, image) VALUES (?, ?, ?, ?)`,
    [name, quantity, price, image]
  );
  return record.insertId;
};
