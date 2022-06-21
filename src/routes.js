const express = require("express");
const UserModel = require("./models/UserModel");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send({ ok: "Funfando" });
});

routes.post("/register", async (req, res) => {
  const { name, password, age, email } = req.body;
  const newUser = new UserModel({ name, password, age, email });

  try {
    const response = await newUser.save();
    res.send({ response });
  } catch (error) {
    console.error(error);
  }
});

module.exports = routes;

