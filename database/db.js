const mongoose = require("mongoose");
require("dotenv").config();

let MONGO_URL;

if (process.env.NODE_ENV === undefined) {
  MONGO_URL = process.env.MONGO_CON_STR_DEV;
}

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test") {
  MONGO_URL = process.env.MONGO_CON_STR_POD;
}

const connect = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("Database connection..."))
    .catch((err) => console.error(err));
};

module.exports = connect;
