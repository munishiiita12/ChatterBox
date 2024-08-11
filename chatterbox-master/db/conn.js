const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongodbconn = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {console.log("server is running")})
  .catch(() => {});

module.exports = mongodbconn;
