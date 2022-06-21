const express = require("express");
const routes = require("./routes");
const database = require("./database");

const app = express();

app.use(express.json());
app.use(routes);

database.on("error", console.error.bind(console, "MongoDB connection error:"));
database.once("open", () => {
  console.log("Connected successfully");
});

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Rodando na porta: ${PORT}`);
});

