// Update with your config settings.
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname + "/.env"),
});
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: path.join(__dirname + "/migrations"),
    },
    seeds: {
      directory: path.join(__dirname + "/seeds"),
    },
  },

  test: {
    client: "postgresql",
    connection: {
      database: process.env.DB_TEST_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname + "/migrations"),
    },
    seeds: {
      directory: path.join(__dirname + "/seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
