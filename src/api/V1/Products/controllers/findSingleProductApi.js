const findSingleProductLib = require("../../../../lib/products/findSingleProductLib");

const findSingleProductApi = async (req, res) => {
  const filter = req.params.id;
  const singleProduct = await findSingleProductLib(filter);
  res.send(singleProduct);
};

module.exports = findSingleProductApi;
