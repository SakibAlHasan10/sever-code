const changeUserRoleLib = require("../../../lib/users/changeUserRoleLib");

const changeUserRoleApi = async (req, res, next) => {
  try {
    const filter = req.params.id;
    const role = req.body;
    const changeRole = await changeUserRoleLib(filter, role);
    res.send(changeRole);
  } catch (error) {
    next(error);
  }
};

module.exports = changeUserRoleApi;
