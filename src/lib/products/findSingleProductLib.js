const Products = require("../../models/Products");

const findSingleProductLib = async (filter) => {
  const product = await Products.findById(filter);

  return product;
};

module.exports = findSingleProductLib;
