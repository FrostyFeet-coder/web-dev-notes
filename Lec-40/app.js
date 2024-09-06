const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

let arr = ["xyz", "213", "ansh"];

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  //   res.send("hello ");
  let rn = Math.floor(Math.random() * 24 + 5);
  res.render("index", { rn });
});

app.get("/product", (req, res) => {
  res.render("product", { arr });
});

app.listen(8080, function () {
  console.log("server connected ");
});
