const db = require("../db");

module.exports.getAllProducts = async () => {
  const [records] = await db.query("SELECT * FROM products");
  return records;
};

module.exports.getProductById = async (id) => {
  const [[record]] = await db.query(`SELECT * FROM products WHERE id = (?)`, [
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

module.exports.deleteProduct = async (id) => {
  const [{ recordId }] = await db.query(`DELETE FROM products WHERE id = (?)`, [
    id,
  ]);
  return recordId;
};

module.exports.updateProductById = async (
  { name, quantity, price, image },
  id
) => {
  const [record] = await db.query(
    `UPDATE products SET name = ?, quantity = ?, price = ?, image = ? WHERE id = (?)`,
    [name, quantity, price, image, id]
  );

  return record;
};
