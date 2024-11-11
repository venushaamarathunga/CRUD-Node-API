const db = require("../db");

module.exports.getAllEmployees = async () => {
  const [records] = await db.query("SELECT * FROM products");
  return records;
};
