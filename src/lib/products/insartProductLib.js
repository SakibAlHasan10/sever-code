const Products = require("../../models/Products");

const insertProductLib = async (query) => {
    const insertDoc={
        productName:query.productName,
        productDescription:query.productDescription,
        productImage:query.productImage,
        links:query.links,
        tags:query.tags,
        owner:query.owner,
        // postTime:("timestamp", new Date())
        time : { type : Date(), default: Date.now() }
    }
    console.log(insertDoc)
    const cursor = await Products.insertMany(insertDoc);
    console.log(cursor)
  return cursor;
};

module.exports = insertProductLib;
