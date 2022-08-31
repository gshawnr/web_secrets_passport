const { createModel } = require("../db");

const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const userSchema = {
  email: String,
  password: String,
  googleId: String,
  secrets: [String],
};

const User = createModel("user", userSchema, [
  passportLocalMongoose,
  findOrCreate,
]);

User.getUserById = async (id) => {
  try {
    const foundUser = await User.findById(id);
    return foundUser;
  } catch (err) {
    throw new Error("getUserById error", { cause: err });
  }
};

exports.User = User;
