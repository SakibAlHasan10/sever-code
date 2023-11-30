const findAllSecure = require("../../../../lib/products/findAllSecure");

const findAllSecureApi = async (req, res) => {
  let filter = req.query;
  const allProduct = await findAllSecure(filter);
  res.send(allProduct);
};

module.exports = findAllSecureApi;
