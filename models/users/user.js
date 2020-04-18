const mongoose = require("mongoose");
const extendSchema = require("mongoose-extend-schema");
let Person = require("./person");

const UserSchema = extendSchema(Person, {});

const User = mongoose.model("User", UserSchema);

module.exports = User;
