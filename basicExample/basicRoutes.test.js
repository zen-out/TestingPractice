const app = require("./basicRoutes");

const request = require("supertest");

/**********************************************
 * Test for get route
 * ==================================
 ***********************************************/
describe("Routes", () => {
  test("/ should return home page", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .end((error, response) => {
        if (error) {
          throw error;
        }
        done();
      });
  });

  /**********************************************
   *  Test for get profile
   * ==================================
   ***********************************************/
  test("/profile should return the profile page", (done) => {
    request(app)
      .get("/profile")
      .expect(200)
      .end((error, response) => {
        if (error) {
          throw error;
        }
        done();
      });
  });

  /**********************************************
   * Test for post
   * ==================================
   ***********************************************/
  test("/profile should post data", (done) => {
    request(app)
      .post("/profile")
      .send({
        username: "sam",
        password: "password",
      })
      .expect(201)
      .expect(function (response) {
        (response.body.name = "sam"),
          (response.body.password = "password");
      })
      .end((error, response) => {
        if (error) {
          throw error;
        }
        done();
      });
  });

  /**********************************************
   * Test for cookie
   * ==================================
   ***********************************************/
  test("/setcookie can set cookie", (done) => {
    request(app)
      .get("/setcookie")
      .expect("set-cookie", "theme=dark; Path=/")
      .end((error, response) => {
        if (error) {
          throw error;
        }
        done();
      });
  });

  /**********************************************
   * Test for a query string
   * ==================================
   ***********************************************/
  test("should accept a query string", (done) => {
    request(app)
      .get("/query")
      .query({ username: "sam" })
      .expect(200)
      .end((error, response) => {
        if (error) {
          throw error;
        }
        done();
      });
  });
});
