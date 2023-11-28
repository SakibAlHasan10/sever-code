const Products = require("../../models/Products");

const findAllProductLib = async (filter) => {
  let fil = {};
  if (filter.featured) {
    fil = { featured: filter.featured };
  }

  let option = {};
  if (filter.createdAt) {
    option = { createdAt: filter.createdAt };
  } else if (filter.vote) {
    option = { vote: filter.vote };
  }

  const product = await Products.find(fil).sort(option);

  return product;
};

module.exports = findAllProductLib;
