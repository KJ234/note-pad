const { Router } = require("express");
const path = require("path");

Router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});
