const Products = require("../../models/Products");

const findAllSecure = async (filter) => {
  console.log(filter, "qqqq");

  const product = await Products.find(filter);

  return product;
};

module.exports = findAllSecure;
