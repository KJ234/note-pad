const express = require("express");

const Router = express.Router();

const fs = require("fs");

const uniqid = require("uniqid");
// GET request for reviews
Router.get("/api/notes", (req, res) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    return res.json(JSON.parse(data));
  });
});

Router.post("/api/notes", (req, res) => {
  fs.readFile("db/db.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const db = JSON.parse(data);
      const newNote = req.body;
      const id = "id";
      const noteId = uniqid();
      newNote[id] = noteId;
      db.push(newNote);

      fs.writeFile("db/db.json", JSON.stringify(db), (err) => {
        if (err) {
          console.log(err);
        } else {
          return res.json(db);
        }
      });
    }
  });
});

module.exports = Router;
