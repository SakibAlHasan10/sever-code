const findAllSecure = require("../../../../lib/products/findAllSecure");

const findAllSecureApi = async (req, res, next) => {
  try {
    let filter = req.query;
    const allProduct = await findAllSecure(filter);
    res.send(allProduct);
  } catch (error) {
    next(error);
  }
};

module.exports = findAllSecureApi;
