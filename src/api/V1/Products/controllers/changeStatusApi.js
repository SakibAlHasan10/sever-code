const changeStatusLib = require("../../../../lib/products/changeStatusLib");
const changeStatusApi = async (req, res, next) => {
  try {
    const filter = req.params.id;
    const status = req.body;
    const changeStatus = await changeStatusLib(filter, status);
    res.send(changeStatus);
  } catch (error) {
    next(error);
  }
};

module.exports = changeStatusApi;
