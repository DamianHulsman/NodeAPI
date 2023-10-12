const express = require("express");
const app = express();
var port = 3000;
const conn = require('./connect');
const select = require('./select');
const create = require('./create');
const update = require('./update');
const remove = require('./delete');
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const cors = require("cors");
const { URLSearchParams } = require("url");

app.options("*", cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));

app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.send("<div style='display: block'><h1>NodeJS API</h1><h2>Endpoints</h2><ul><li>Select</li><li>Update</li><li>Create</li><li>Delete</li></ul></div>");
});

app.get("/select", (req, res, next) =>  {
  select.select(req, res, next);
  console.log(req.url);
});

app.get("/create", (req, res, next) => {
  create.create(req, res, next);
});

app.get("/update", (req, res, next) => {
  update.update(req, res, next);
});

app.get("/delete", (req, res, next) => {
  remove.delete(req, res, next);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

const url = require('url');
const url_parts = url.parse(toString(URLSearchParams), true);
const query = url_parts.query;

console.log(query);