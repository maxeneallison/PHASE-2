//Install Command:
//npm init
//npm i express express-handlebars body-parser

//------------------//
const express = require("express");
const server = express();

//--------------------/
const bodyParser = require("body-parser");
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const handlebars = require("express-handlebars");
server.set("view engine", "hbs");
server.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);

server.use(express.static("public"));

const r1 = require('./restoData').restaurant_row1;
const r2 = require('./restoData').restaurant_row2;
//--------------------//
server.get("/", function (req, resp) {
  resp.render("main", {
    layout: "index",
    title: "View Establishment",
    "resto_row1": r1,
    "resto_row2": r2
  });
});

//------------------------//
const port = process.env.PORT | 5000;
server.listen(port, function () {
  console.log("Listening at port eto na " + port);
});
