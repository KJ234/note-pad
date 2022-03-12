const express = require("express");
const path = require("path");
const fs = require("fs");

const htmlRoutes = require("./Routes/htmlRoutes");

const apiRoutes = require("./Routes/apiRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
