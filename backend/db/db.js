const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected");
  } catch (err) {
    console.log("error", err);
  }
};

module.exports = { db };
