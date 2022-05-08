const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.database_url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
