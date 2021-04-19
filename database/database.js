require("dotenv").config();
const config = require("../knexfile")["development"];
const database = require("knex")(config);

module.exports = database;
