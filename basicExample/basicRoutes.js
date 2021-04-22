const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

/**********************************************
 * Get Route
 * ==================================
 ***********************************************/
app.get("/", (request, response) => {
  response.status(200).send("hello!");
});

/**********************************************
 * Get Profile Page
 * ==================================
 ***********************************************/
app.get("/profile", (request, response) => {
  response.status(200).send("getting profile page!");
});

/**********************************************
 * Post data to backend
 * ==================================
 ***********************************************/
app.post("/profile", (request, response) => {
  // lets say body is username: "sam", password: "password"

  let fakeBody = request.body;
  let body = {
    username: "sam",
    password: "password",
  };
  return response.status(201).json(body);
});

/**********************************************
 * Set Cookie
 * ==================================
 ***********************************************/
app.get("/setcookie", (req, res) => {
  res.cookie("theme", "dark");
  res.send();
});

/**********************************************
 * Get Query
 * ==================================
 ***********************************************/
app.get("/query", (req, res) => {
  let query = req.query;
  let querySample = "sampleQuery";
  console.log("should accept query string");
  res.send(200);
});

module.exports = app;
