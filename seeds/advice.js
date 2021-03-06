exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("advice")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("advice").insert([
        {
          id: 1,
          name: "Uncle Fai",
          advice: "Be pessimistic. Very pessimistic.",
        },
        {
          id: 2,
          name: "Uncle Peter",
          advice:
            "It will take a lot of patience, empathy and humour. Also, try to assume good intentions.",
        },
        {
          id: 3,
          name: "Auntie Pasa",
          advice:
            "The real sign of love is not the ability to read another's mind - rather, it probably is the willingness to explain and to listen calmly.",
        },
        {
          id: 4,
          name: "Auntie Mag",
          advice:
            "Frustration doesn’t just stem from things being difficult – only from them being unexpectedly difficult.",
        },
        {
          id: 5,
          name: "Uncle Peter",
          advice:
            "Maturity is founded, really, on recognizing one's craziness - if we are not regularly and deeply embarrassed about who we are, it is because we have a dangerous capacity for selective memory.",
        },
        {
          id: 6,
          name: "Mom",
          advice:
            "It's never as glamorous as it seems. Get ready for administration, administration, administration.",
        },
      ]);
    });
};
