// const TestDatabase = require("./test_env");

const config = require("../knexfile").development;
const knex = require("knex")(config);
const AdviceQueries = require("./adviceQueries");

let adviceQueries = new AdviceQueries(knex);
describe("advice tests", () => {
  beforeAll(() => {
    adviceQueries.initialize();
  });
  afterAll(() => {
    adviceQueries.cleanup();
  });
  it("get a list of six advices", () => {
    return adviceQueries
      .getAll()
      .then((allAdvice) => {
        expect(allAdvice.length).toBeGreaterThan(4);
      })
      .catch((err) => expect(err).toBeNull());
  });
  it("first advice should equal to uncle fai's", () => {
    return adviceQueries
      .getById(1)
      .then((advice) => {
        // console.log(allAdvice);
        expect(advice).toEqual({
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
    return adviceQueries.post(newAdvice).then((posted) => {
      expect(posted).toEqual("posted");
    });
  });
  it("7 advice should be dad", () => {
    return adviceQueries
      .getById(7)
      .then((advice) => {
        // console.log(allAdvice);
        expect(advice).toEqual({
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
      .edit(7, editedAdvice)
      .then((edited) => {
        // console.log("EDITED", edited);
        expect(edited).toEqual("edited");
      });
  });
  it("edited advice should be dad", () => {
    return adviceQueries
      .getById(7)
      .then((advice) => {
        // console.log(allAdvice);
        expect(advice).toEqual({
          id: 7,
          name: "dad",
          advice: "stay flexible",
        });
      })
      .catch((err) => expect(err).toBeNull());
  });
  it("deleteAdvice deletes a piece of advice", () => {
    return adviceQueries.delete(7).then((deleted) => {
      expect(deleted).toEqual("deleted");
    });
  });
  it("getting deleted advice should not work", () => {
    return adviceQueries
      .getById(7)
      .then((advice) => {
        expect(advice).toEqual(undefined);
      })
      .catch((err) => expect(err).toBeNull());
  });
});

// describe("advice tests", () => {
//   beforeAll(() => {
//     return knex.migrate.latest().then(() => {
//       return knex.seed.run();
//     });
//   });
//   afterAll(() => {
//     knex.destroy();
//   });
//   it("get a list of six advices", () => {
//     return adviceQueries
//       .getAll(knex)
//       .then((allAdvice) => {
//         expect(allAdvice.length).toEqual(6);
//       })
//       .catch((err) => expect(err).toBeNull());
//   });
//   it("first advice should equal to uncle fai's", () => {
//     return adviceQueries
//       .get(1, knex)
//       .then((allAdvice) => {
//         // console.log(allAdvice);
//         expect(allAdvice).toEqual({
//           id: 1,
//           name: "Uncle Fai",
//           advice: "Be pessimistic. Very pessimistic.",
//         });
//       })
//       .catch((err) => expect(err).toBeNull());
//   });
//   it("post advice posts a piece of advice", () => {
//     let newAdvice = {
//       id: 7,
//       name: "dad",
//       advice: "stay chill",
//     };
//     return adviceQueries
//       .postAdvice(newAdvice, knex)
//       .then((posted) => {
//         expect(posted).toEqual("posted");
//       });
//   });
//   it("7 advice should be dad", () => {
//     return adviceQueries
//       .getAdvice(7, knex)
//       .then((allAdvice) => {
//         // console.log(allAdvice);
//         expect(allAdvice).toEqual({
//           id: 7,
//           name: "dad",
//           advice: "stay chill",
//         });
//       })
//       .catch((err) => expect(err).toBeNull());
//   });
//   it("editAdvice edits a piece of advice", () => {
//     let editedAdvice = {
//       id: 7,
//       name: "dad",
//       advice: "stay flexible",
//     };
//     return adviceQueries
//       .editAdvice(7, editedAdvice, knex)
//       .then((edited) => {
//         expect(edited).toEqual("edited");
//       });
//   });
//   it("edited advice should be dad", () => {
//     return adviceQueries
//       .getAdvice(7, knex)
//       .then((allAdvice) => {
//         // console.log(allAdvice);
//         expect(allAdvice).toEqual({
//           id: 7,
//           name: "dad",
//           advice: "stay flexible",
//         });
//       })
//       .catch((err) => expect(err).toBeNull());
//   });
//   it("deleteAdvice deletes a piece of advice", () => {
//     return adviceQueries
//       .deleteAdvice(7, knex)
//       .then((deleted) => {
//         expect(deleted).toEqual("deleted");
//       });
//   });
//   it("getting deleted advice should not work", () => {
//     return adviceQueries
//       .getAdvice(7, knex)
//       .then((allAdvice) => {
//         expect(allAdvice).toEqual(undefined);
//       })
//       .catch((err) => expect(err).toBeNull());
//   });
// });
