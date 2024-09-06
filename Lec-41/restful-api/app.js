const express = require('express');
const app = express()
const path = require('path');
var methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(methodOverride("_method"));


let commentsArray = [
  {
    id: 0,
    author: "ansh",
    comments: "kya book hai bc",
  },
  {
    id: 1,
    author: "Ansh Wasan",
    comments: "manipulation ke 100 ways",
  },
];


app.get("/", (req, res) => {
    res.send("hello")
})

app.get("/comments", (req, res) => {
    res.render("index.ejs", { commentsArray });
    
})

app.get("/comment/new", (req, res) => {
    res.render("new")
})

app.post("/comments", (req, res) => {
    console.log(req.body, "req.body");
    let { author, comments } = req.body
    commentsArray.push({ id: comments.length, author, comments });
    // res.send(req.body)

    res.redirect("/comments")
})


app.get("/comments/:idd", (req, res) => {
    let { idd } = req.params
    let foundComment = commentsArray.find(
        (everyComment) => parseInt(idd) === everyComment.id
    );
    // console.log(foundComment);
    // res.send(foundComment)

    res.render("show" , {comments : {foundComment}})
})

app.get("/comments/:idd/edit", (req, res) => {
        let { idd } = req.params;
        let foundComment = commentsArray.find(
          (everyComment) => parseInt(idd) === everyComment.id
        );
        // console.log(foundComment);
        // res.send(foundComment);

        res.render("edit",  {foundComment});

})

app.patch("/comments/:idd", (req, res) => {
    let { idd } = req.params
    let foundComment = commentsArray.find(
      (everyComment) => parseInt(idd) === everyComment.id
    );
    let { author, comments } = req.body
    foundComment.author = author
    foundComment.comments = comments
    res.redirect(`/comments/${id}`)
})

app.delete("/comments/:idd", (req, res) => {
  let { idd } = req.params
  let newArr = commentsArray.filter(
    (everyComment)=> parseInt((idd) !== everyComment.id)
  )
})
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, 'public')))



app.listen(8080, function() {
    console.log("server connected");
})