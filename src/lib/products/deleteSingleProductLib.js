const Products = require("../../models/Products");

const deleteSingleProductLib = async (filter) => {
  const product = await Products.findByIdAndDelete(filter);

  return product;
};

module.exports = deleteSingleProductLib;
