const findProductByUser = require("../../../../lib/products/findProductByUser");

const findProductByUserApi = async (req, res, next) => {
  try {
    const filter = req.params.email;
    const myProduct = await findProductByUser(filter);
    res.send(myProduct);
  } catch (error) {
    next(error);
  }
};

module.exports = findProductByUserApi;
