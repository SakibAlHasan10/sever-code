const deleteSingleProductLib = require("../../../../lib/products/deleteSingleProductLib");

const deleteSingleProductApi = async (req, res, next) => {
  try {
    const filter = req.params.id;
    const singleProduct = await deleteSingleProductLib(filter);
    res.send(singleProduct);
  } catch (error) {
    next(error);
  }
};

module.exports = deleteSingleProductApi;
