const User = require("../model/User");

const handleUpdate = async (req, res) => {
  // find user by it's id
  if (!req?.body?.id) {
    return res
      .status(201)
      .json("Sir we require id to catch the user to update");
  }
  let foundUser = await User.findOne({ _id: req.body.id }).exec();
  console.log(foundUser);
  const toAddRoles = req.body.roles;
  const val = toAddRoles === "Admin" ? 5001 : 1984;
  foundUser.roles = {
    ...foundUser.roles,
    [toAddRoles]: val,
  };
  console.log(foundUser);
  const result = await foundUser.save();
  res.json(result);
};

module.exports = { handleUpdate };
