const findProductByUser = require("../../../../lib/products/findProductByUser");

const findProductByUserApi = async (req, res) => {
  const filter = req.params.email;
  const myProduct = await findProductByUser(filter);
  res.send(myProduct);
};

module.exports = findProductByUserApi;
