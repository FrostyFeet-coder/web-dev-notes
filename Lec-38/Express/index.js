const express = require("express");
let app = express(); //app -> instance

// app.get("/", (req, res) => {
//   res.send("heloowwwwwwww");
// });

app.use(function (req, res) {
  // console.log("heloo");
    res.send("<p>some html</p>");
});
app.listen(3000, () => {
  console.log("hellow");
});
