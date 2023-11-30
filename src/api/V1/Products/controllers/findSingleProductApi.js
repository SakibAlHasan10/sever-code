const findSingleProductLib = require("../../../../lib/products/findSingleProductLib");

const findSingleProductApi = async (req, res, next) => {
  try {
    const filter = req.params.id;
    const singleProduct = await findSingleProductLib(filter);
    res.send(singleProduct);
  } catch (error) {
    next(error);
  }
};

module.exports = findSingleProductApi;
