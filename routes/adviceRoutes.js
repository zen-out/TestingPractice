const express = require("express");
const Routes = require("./routes");
// let database = require("../database/database");
// let AdviceQueries = require("../database/adviceQueries");
// pass in service class here
class AdviceRoutes extends Routes {
  // pass in service class here
  constructor(adviceQueries) {
    super();
    this.adviceQueries = adviceQueries;
  }
  router() {
    let router = express.Router();
    router.get("/", this.getAll.bind(this));
    router.get("/:id", this.get.bind(this));
    router.post("/", this.post.bind(this));
    router.put("/:id", this.edit.bind(this));
    router.delete("/:id", this.delete.bind(this));
    return router;
  }
  getAll(request, response) {
    return this.adviceQueries
      .getAll()
      .then((listOfAdvice) => {
        console.log(listOfAdvice);
        response.status(200).send(listOfAdvice);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  get(request, response) {
    let id = request.params.id;
    return this.adviceQueries
      .getById(id)
      .then((advice) => {
        console.log(advice);
        response.status(200).send(advice);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  post(request, response) {
    console.log("Posted request body", request.body);
    let advice = request.body;
    return this.adviceQueries
      .post(advice)
      .then((postedConfirmation) => {
        console.log(postedConfirmation);
        response.status(200).send(postedConfirmation);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  edit(request, response) {
    let id = request.params.id;
    let advice = request.body;
    return this.adviceQueries
      .edit(id, advice)
      .then((editedConfirmation) => {
        console.log(editedConfirmation);
        response.status(200).send(editedConfirmation);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  delete(request, response) {
    let id = request.params.id;
    return this.adviceQueries
      .delete(id)
      .then((deleteConfirmation) => {
        console.log(deleteConfirmation);
        response.status(200).send(deleteConfirmation);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
}

module.exports = AdviceRoutes;
// let adviceQueries = new AdviceQueries(database);
// let adviceRoutes = new AdviceRoutes(adviceQueries);
// adviceRoutes.getAll();
