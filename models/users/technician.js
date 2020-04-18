const mongoose = require("mongoose");
const extendSchema = require("mongoose-extend-schema");
let Person = require("./person");

const TechnicianSchema = extendSchema(Person, {});

const Technician = mongoose.model("Technician", TechnicianSchema);

module.exports = Technician;
