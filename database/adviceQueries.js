let database = require("./database");

module.exports = {
  getAllAdvice: getAllAdvice,
  getAdvice: getAdvice,
  postAdvice: postAdvice,
  editAdvice: editAdvice,
  deleteAdvice: deleteAdvice,
  getAdviceByName: getAdviceByName,
};

function getAllAdvice(db = database) {
  let arr = [];
  return db("advice")
    .select("id", "name", "advice")
    .catch((error) => {
      console.log("Error", error);
    });
}

function getAdvice(id, db = database) {
  return db("advice")
    .select("id", "name", "advice")
    .where({ id: id })
    .first()
    .then((first) => {
      console.log(first);
      return first;
    });
}

function getAdviceByName(name, db = database) {
  return db("advice")
    .select("id", "name", "advice")
    .where({ name: name })
    .first()
    .then((first) => {
      return first;
    });
}
function postAdvice(advice, db = database) {
  return db("advice")
    .insert(advice)
    .then(() => {
      return "posted";
    });
}
function editAdvice(id, advice, db = database) {
  return getAdvice(id, db).then((oldAdvice) => {
    return db("advice")
      .update(advice)
      .where({ id: id })
      .then(() => {
        return "edited";
      });
  });
}
function deleteAdvice(id, db = database) {
  return db("advice")
    .where({ id: id })
    .del()
    .then(() => {
      return "deleted";
    });
}

let newAdvice = {
  name: "dad",
  advice: "stay chill",
};
let editedAdvice = {
  name: "dad",
  advice: "stay flexible",
};
// initialize(database);
// getAdviceByName("dad", database);
// let getDatabase = initialize(database);
// getAllAdvice(database);
// postAdvice(newAdvice, database);
// getAdvice(7, database);
// editAdvice(7, "dad", "stay flexible", database);
// editAdvice(6);
// deleteAdvice(7, database);
