const app = require("express")();

const indexRouter = require("./index");

app.use("/", indexRouter);

app.listen(3001, () => {
  console.log("lets try");
});
