const { Router } = require("express");
const path = require("path");

Router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

Router.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

module.exports = Router;
