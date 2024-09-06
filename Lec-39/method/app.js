const express = require("express");
const app = express();

app.get("/", (req, res) => {
  {
    console.log("response send");
    res.send("<h1> res bhi bhej di </h1>");
  }
});

const PORT = 8080;
//middleware (string matching)
// app.use("/dog", (req, res) => {
//     res.send("<h1> mai middleware dog par hu </h1>")
// });


// app.use("/dog/cat", (req, res) => {
//   res.send("<h1> mai middleware dog  cat par hu </h1>");
// });


app.get("/", (req, res)=>{
    res.send("<h1> this is / path</>h1")
})

app.get("/dog", (req, res)=>{
    res.send("<h1> this is /dog path</>h1")
})
app.get("/dog/cat", (req, res)=>{
    res.send("<h1> this is /dog/cat path</>h1")
})

app.use("/", (req, res)=>{
    res.send("page not found")
})

app.get("*", (req, res) => {
    res.send("page not found")
})

app.listen(PORT, function () {
  console.log(`server connected at port ${PORT}`);
});
