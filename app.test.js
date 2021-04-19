const request = require("supertest");
const app = require("express")();
const indexRouter = require("./index");
app.use("/", indexRouter);

/**********************************************
 * To Do
 * ==================================
 ***********************************************/

test("getting home page", (done) => {
  request(app).get("/").expect(200, done);
});
