const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database connection..."))
    .catch((err) => console.error(err));
};

module.exports = connect;
