const Products = require("../../models/Products");

const findAllSecure = async (filter) => {
  let query = {};
  if (filter) {
    query = filter;
  }
  const product = await Products.find(query);
  return product;
};

module.exports = findAllSecure;
