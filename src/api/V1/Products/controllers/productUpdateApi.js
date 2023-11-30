const singleProductUpdateLib = require("../../../../lib/products/singleProductUpdateLib");

const productUpdateApi = async (req, res) => {
    const query = req.body;
    const filter = req.params.id;
  const product = await singleProductUpdateLib(query, filter);
  res.send(product);
};

module.exports = productUpdateApi;
