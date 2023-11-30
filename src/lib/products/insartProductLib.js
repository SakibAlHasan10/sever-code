const Products = require("../../models/Products");

const insertProductLib = async (query) => {
  const insertDoc = {
    productName: query.productName,
    productDescription: query.productDescription,
    productImage: query.productImage,
    links: query.links,
    tags: query.tags,
    owner: query.owner,
    featured: query.featured,
    status: query.status,
    vote: query.vote,
    downVote: query.vote,
  };
  const cursor = await Products.create(insertDoc);
  return cursor;
};

module.exports = insertProductLib;
