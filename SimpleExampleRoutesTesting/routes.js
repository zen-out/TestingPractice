/**********************************************
 * What would I really want to know about testing routes?
 * ==================================
 * - Organization
 * - Libraries
 * - Syntax
 ***********************************************/

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.status(200).send("yo");
});

app.get("/:id", (request, response) => {
  let id = request.params.id;
  // query to grab the data
  // e.g., let data = getUser(id)
  // then response.send(data)
  response.status(200).send("userInfo");
});

app.put("/:id", (request, response) => {
  let id = request.params.id;
  let body = request.body;
  // query to edit the data
  // e.g., let editUser = editUser(id, body)
  // then response.send("edited")
  response.status(200).send("edited");
});

app.delete("/:id", (request, response) => {
  let id = request.params.id;
  // query to delete the data
  // e.g., let deleteUser = deleteUser(id)
  response.status(200).send("deleted");
});

app.listen(3001, () => {
  console.log("app listening on port 3001");
});
