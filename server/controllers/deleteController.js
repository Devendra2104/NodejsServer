const User = require("../model/User");

const handleDelete = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(201).json({ message: "Please Provide the Id Sir!" });
  }
  const result = await User.deleteOne({ _id: req.body.id });
  res.json(result);
};

module.exports = { handleDelete };
