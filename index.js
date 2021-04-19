
const indexRouter = require( "express" )();

indexRouter.get("/", (request, response) => {
  response.status(200).send("hello");
});

indexRouter.listen(3000, () => {
  console.log("listening on port 3000");
});

module.exports = indexRouter;
