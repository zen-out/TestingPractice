const request = require("supertest");

// This is integration testing - I'm requesting the routes and the database
const controller = require("./controller");
describe("advice routes", () => {
  beforeAll(() => {});

  it("/api/advice get all advice returns list of routes", () => {
    return request(controller)
      .get("/api/advice")
      .expect(200)
      .then((response) => {
        expect(response.body.length).toBeGreaterThan(4);
      })
      .catch((err) => expect(err).toBeNull());
  });
  it("/:id get advice returns correct advice", () => {
    const id = 1;
    return request(controller)
      .get(`/api/advice/${id}`)
      .expect(200)
      .then((response) => {
        let name = response.body.name;
        let advice = response.body.advice;
        expect(name).toBe("Uncle Fai");
        expect(advice).toBe(
          "Be pessimistic. Very pessimistic."
        );
      })
      .catch((err) => expect(err).toBeNull());
  });
  it("/ post advice returns posted", () => {
    const newAdvice = {
      id: 7,
      name: "kam",
      advice: "Stay chill",
    };
    return request(controller)
      .post("/api/advice")
      .send(newAdvice)
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual("posted");
      })
      .catch((err) => expect(err).toBeNull());
  });
  it("/:id edit advice returns edited", () => {
    const editedAdvice = {
      id: 6,
      name: "dad",
      advice: "stay flexible",
    };
    let id = 6;
    return request(controller)
      .put(`/api/advice/${id}`)
      .send(editedAdvice)
      .expect(200)
      .then((response) => {
        // console.log(response);
        expect(response.text).toEqual("edited");
      })
      .catch((err) => expect(err).toBeNull());
  });
  it("/:id delete advice returns deleted", () => {
    const id = 6;
    return request(controller)
      .delete(`/api/advice/${id}`)
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual("deleted");
      })
      .catch((err) => expect(err).toBeNull());
  });
});
