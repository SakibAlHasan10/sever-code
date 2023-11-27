const changeStatusLib = require("../../../../lib/products/changeStatusLib");

const changeStatusApi = async (req, res) => {
  const filter = req.params.id;
  const status = req.body;
  const changeStatus = await changeStatusLib(filter, status);
  res.send(changeStatus);
};

module.exports = changeStatusApi;
