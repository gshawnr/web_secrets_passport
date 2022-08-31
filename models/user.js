const { createModel } = require("../db");

const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const userSchema = {
  email: String,
  password: String,
  googleId: String,
  secret: String,
};

exports.User = createModel("user", userSchema, [
  passportLocalMongoose,
  findOrCreate,
]);
