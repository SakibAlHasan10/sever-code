const Products = require("../../models/Products");

const findAllProductLib = async (filter) => {
  const product = await Products.find();

  return product;
};

module.exports = findAllProductLib;
