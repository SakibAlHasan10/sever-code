const singleProductUpdateLib = require("../../../../lib/products/singleProductUpdateLib");

const productUpdateApi = async (req, res, next) => {
  try {
    const query = req.body;
    const filter = req.params.id;
    const product = await singleProductUpdateLib(query, filter);
    res.send(product);
  } catch (error) {
    next(error);
  }
};

module.exports = productUpdateApi;
