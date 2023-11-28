const changeUserRoleLib = require("../../../lib/users/changeUserRoleLib");

const changeUserRoleApi = async (req, res) => {
  const filter = req.params.id;
  const role = req.body;
  const changeRole = await changeUserRoleLib(filter, role);
  res.send(changeRole);
};

module.exports = changeUserRoleApi;
