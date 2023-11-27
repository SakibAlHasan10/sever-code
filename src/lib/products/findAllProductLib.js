const Products = require("../../models/Products");

const findAllProductLib = async (filter) => {
  const product = await Products.find(filter);

  return product;
};

module.exports = findAllProductLib;
