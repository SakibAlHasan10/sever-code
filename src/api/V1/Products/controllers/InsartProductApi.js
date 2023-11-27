const insertProductLib = require("../../../../lib/products/insartProductLib");

const insertProductApi = async (req, res) => {
  const query = req.body;
  const user = await insertProductLib(query);
  res.send(user);
};

module.exports = insertProductApi;
