const Products = require("../../models/Products");

const singleProductUpdateLib = async (query, filter) => {
  const insertDoc = {
    productName: query.productName,
    productDescription: query.productDescription,
    productImage: query.productImage,
    links: query.links,
    tags: query.tags,
    owner: query.owner,
  };
  const cursor = await Products.findByIdAndUpdate(filter, insertDoc);
  return cursor;
};

module.exports = singleProductUpdateLib;
