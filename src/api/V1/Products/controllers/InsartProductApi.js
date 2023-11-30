const insertProductLib = require("../../../../lib/products/insartProductLib");

const insertProductApi = async (req, res, next) => {
  try {
    const query = req.body;
    const user = await insertProductLib(query);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

module.exports = insertProductApi;
