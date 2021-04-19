// const TestDatabase = require("./test_env");

const config = require("../../knexfile").development;
const knex = require("knex")(config);
const adviceQueries = require("../../database/adviceQueries");

describe("advice tests", () => {
  beforeAll(() => {
    return knex.migrate.latest().then(() => {
      return knex.seed.run();
    });
  });
  afterAll(() => {
    knex.destroy();
  });
  it("get a list of six advices", () => {
    return adviceQueries
      .getAllAdvice(knex)
      .then((allAdvice) => {
        expect(allAdvice.length).toEqual(6);
      })
      .catch((err) => expect(err).toBeNull());
  });
  it("first advice should equal to uncle fai's", () => {
    return adviceQueries
      .getAdvice(1, knex)
      .then((allAdvice) => {
        // console.log(allAdvice);
        expect(allAdvice).toEqual({
          id: 1,
          name: "Uncle Fai",
          advice: "Be pessimistic. Very pessimistic.",
        });
      })
      .catch((err) => expect(err).toBeNull());
  });
  it("post advice posts a piece of advice", () => {
    let newAdvice = {
      id: 7,
      name: "dad",
      advice: "stay chill",
    };
    return adviceQueries
      .postAdvice(newAdvice, knex)
      .then((posted) => {
        expect(posted).toEqual("posted");
      });
  });
  it("7 advice should be dad", () => {
    return adviceQueries
      .getAdvice(7, knex)
      .then((allAdvice) => {
        // console.log(allAdvice);
        expect(allAdvice).toEqual({
          id: 7,
          name: "dad",
          advice: "stay chill",
        });
      })
      .catch((err) => expect(err).toBeNull());
  });
  it("editAdvice edits a piece of advice", () => {
    let editedAdvice = {
      id: 7,
      name: "dad",
      advice: "stay flexible",
    };
    return adviceQueries
      .editAdvice(7, editedAdvice, knex)
      .then((edited) => {
        expect(edited).toEqual("edited");
      });
  });
  it("edited advice should be dad", () => {
    return adviceQueries
      .getAdvice(7, knex)
      .then((allAdvice) => {
        // console.log(allAdvice);
        expect(allAdvice).toEqual({
          id: 7,
          name: "dad",
          advice: "stay flexible",
        });
      })
      .catch((err) => expect(err).toBeNull());
  });
  it("deleteAdvice deletes a piece of advice", () => {
    return adviceQueries
      .deleteAdvice(7, knex)
      .then((deleted) => {
        expect(deleted).toEqual("deleted");
      });
  });
  it("getting deleted advice should not work", () => {
    return adviceQueries
      .getAdvice(7, knex)
      .then((allAdvice) => {
        expect(allAdvice).toEqual(undefined);
      })
      .catch((err) => expect(err).toBeNull());
  });
});
