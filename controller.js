/**********************************************
 * Libraries
 * ==================================
 ***********************************************/
require("dotenv").config();
const exphbs = require("express-handlebars");
const express = require("express");
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");

/**********************************************
 * My own imports
 * ==================================
 ***********************************************/
// database
let database = require("./database/database");
// advice queries
let AdviceQueries = require("./database/adviceQueries");
let AdviceRoutes = require("./routes/adviceRoutes");

/**********************************************
 * Configuration
 * ==================================
 ***********************************************/
const controller = express();
controller.engine("handlebars", exphbs());
controller.set("view engine", "handlebars");
controller.use(express.static("assets"));
controller.use(
  express.static(__dirname + "/node_modules/jquery/dist")
);
controller.use(bodyParser.json());
controller.use(bodyParser.urlencoded({ extended: true }));
controller.use(cookieParser());

/**********************************************
 * Advice Routes
 * ==================================
 ***********************************************/
let adviceQueries = new AdviceQueries(database);
let adviceRoutes = new AdviceRoutes(adviceQueries);
controller.use("/api/advice", adviceRoutes.router());

/**********************************************
 * Page Routes
 * ==================================
 ***********************************************/

controller.get("/story", function (req, res) {
  res.render("story");
});
controller.get("/rsvp2", function (req, res) {
  res.render("rsvp2");
});

controller.get("/values", function (req, res) {
  res.render("values");
});

controller.get("/information", function (req, res) {
  res.render("information");
});

controller.get("/gifts", function (req, res) {
  res.render("gifts");
});

controller.get("/rsvp", function (req, res) {
  res.render("rsvp");
});

controller.get("/advice", function (req, res) {
  res.render("advice");
});

controller.get("/", function (req, res) {
  res.render("home");
});

module.exports = controller;
