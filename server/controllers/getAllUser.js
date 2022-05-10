const User = require("../model/User");

const handleGetAllUsersController = async (req, res) => {
  const users = await User.find();
  const Ids = [];
  for (let child of users) {
    Ids.push({ [child.username]: child._id });
  }
  res.status(200).json(Ids);
};

module.exports = handleGetAllUsersController;
