const deleteSingleProductLib = require("../../../../lib/products/deleteSingleProductLib");

const deleteSingleProductApi = async (req, res) => {
  const filter = req.params.id;
  const singleProduct = await deleteSingleProductLib(filter);
  res.send(singleProduct);
};

module.exports = deleteSingleProductApi;
