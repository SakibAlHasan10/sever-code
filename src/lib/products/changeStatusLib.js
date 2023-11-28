const Products = require("../../models/Products");

const changeStatusLib = async (filter, status) => {
  const product = await Products.findByIdAndUpdate(filter, status);
  console.log(product);
  return product;
};

module.exports = changeStatusLib;
 