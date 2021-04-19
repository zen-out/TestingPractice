const request = require("supertest");
const app = require("express")();
const indexRouter = require("./index");
app.use("/", indexRouter);

describe("main routes", function () {
  it("gets home page", function (done) {
    // testing for status code
    request(app).get("/").expect(200, done);
    // testing for text
  });
  it("gets ");
});

describe("user routes", function () {
  it("gets user", function (done) {
    // testing for status code
    request(app).get("/").expect(200, done);
    // testing for text
  });
  it("posts user", function (done) {
    //
  });
  it("edits user", function (done) {});
  it("deletes user", function (done) {});
});

describe("friends routes", function () {
  it("gets friend", function (done) {});
  it("posts friend", function (done) {});
  it("edits friend", function (done) {});
  it("deletes friend", function (done) {});
});

describe("questions routes", function () {
  // gets
  it("gets questions", function (done) {});
  // post
  it("adds favorite question", function (done) {});
  it("gets all favorite questions", function (done) {});
});
