let database = require("./database");

let Queries = require("./queries");
class AdviceQueries extends Queries {
  constructor(db = database) {
    super();
    this.db = db;
    this.initialize();
  }
  initialize() {
    return this.db.migrate.latest().then(() => {
      return this.db.seed.run();
    });
  }
  cleanup() {
    this.db.destroy();
  }
  getAll() {
    return this.db("advice")
      .select("id", "name", "advice")
      .then((rows) => {
        // console.log(rows);
        return rows;
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  getById(id) {
    return this.db("advice")
      .select("id", "name", "advice")
      .where({ id: id })
      .first()
      .then((first) => {
        console.log(first);
        return first;
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  getByName(name) {
    return this.db("advice")
      .select("id", "name", "advice")
      .where({ name: name })
      .first()
      .then((first) => {
        console.log(first);
        return first;
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  post(object) {
    return this.db("advice")
      .insert(object)
      .then(() => {
        console.log("posted");
        return "posted";
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  edit(id, advice) {
    return this.getById(id).then((oldAdvice) => {
      return this.db("advice")
        .update(advice)
        .where({ id: id })
        .then(() => {
          console.log("edited");
          return "edited";
        })
        .catch((error) => {
          console.log("Error", error);
        });
    });
  }
  delete(id) {
    return this.db("advice")
      .where({ id: id })
      .del()
      .then(() => {
        console.log("deleted");
        return "deleted";
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
}

module.exports = AdviceQueries;
// module.exports = {
//   getAllAdvice: getAllAdvice,
//   getAdvice: getAdvice,
//   postAdvice: postAdvice,
//   editAdvice: editAdvice,
//   deleteAdvice: deleteAdvice,
//   getAdviceByName: getAdviceByName,
// };

// function getAllAdvice(db = database) {
//   let arr = [];
//   return db("advice")
//     .select("id", "name", "advice")
//     .catch((error) => {
//       console.log("Error", error);
//     });
// }

// function getAdvice(id, db = database) {
//   return db("advice")
//     .select("id", "name", "advice")
//     .where({ id: id })
//     .first()
//     .then((first) => {
//       console.log(first);
//       return first;
//     });
// }

// function getAdviceByName(name, db = database) {
//   return db("advice")
//     .select("id", "name", "advice")
//     .where({ name: name })
//     .first()
//     .then((first) => {
//       return first;
//     });
// }
// function postAdvice(advice, db = database) {
//   return db("advice")
//     .insert(advice)
//     .then(() => {
//       return "posted";
//     });
// }
// function editAdvice(id, advice, db = database) {
//   return getAdvice(id, db).then((oldAdvice) => {
//     return db("advice")
//       .update(advice)
//       .where({ id: id })
//       .then(() => {
//         return "edited";
//       });
//   });
// }
// function deleteAdvice(id, db = database) {
//   return db("advice")
//     .where({ id: id })
//     .del()
//     .then(() => {
//       return "deleted";
//     });
// }

// let newAdvice = {
//   name: "dad",
//   advice: "stay chill",
// };
// let editedAdvice = {
//   name: "dad",
//   advice: "stay flexible",
// };
// initialize(database);
// getAdviceByName("dad", database);
// let getDatabase = initialize(database);
// getAllAdvice(database);
// postAdvice(newAdvice, database);
// getAdvice(7, database);
// editAdvice(7, "dad", "stay flexible", database);
// editAdvice(6);
// deleteAdvice(7, database);
