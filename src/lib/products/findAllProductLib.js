const Products = require("../../models/Products");

const findAllProductLib = async (filter) => {
  let fil = {};
  if (filter.featured) {
    fil = { featured: filter.featured };
  } else if (filter.text) {
    fil = {
      "tags.id": { $regex: filter.text, $options: "i" },
    };
  }

  let option = {};
  if (filter.createdAt) {
    option = { createdAt: filter.createdAt };
  } else if (filter.vote) {
    option = { vote: filter.vote };
  }
  // let page={}
  // if(filter.page){
  //   page={page: parseInt(filter.page)}
  //   console.log(page,'llll') 
  // }
  const product = await Products.find(fil).sort(option);
  // .skip(page.page*20).limit(20);

  return product;
};

module.exports = findAllProductLib;
