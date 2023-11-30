const findAllProductLib = require("../../../../lib/products/findAllProductLib");

const findAllProductApi = async (req, res, next) => {
  try {
    const filter = req.query;
    const allProduct = await findAllProductLib(filter);
    res.send(allProduct);
  } catch (error) {
    next(error);
  }
};

module.exports = findAllProductApi;
