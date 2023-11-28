const Products = require("../../models/Products");

const findAllSecure = async (filter) => {

  const product = await Products.find(filter);
  return product;
};

module.exports = findAllSecure;
