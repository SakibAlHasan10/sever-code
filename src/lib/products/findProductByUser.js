const Products = require("../../models/Products");

const findProductByUser = async (filter) => {
  const product = await Products.find({ "owner.email": filter });
  return product;
};

module.exports = findProductByUser;
