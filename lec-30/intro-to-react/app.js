// let rootel = document.getElementById('root')
// let h1 = React.createElement("h1", { id: "ansh", className: "wasan" }, "hello from react cdn")


// // let root = ReactDOM.createRoot(rootel)
// // root.render(h1)
// // ReactDOM.render(h1, rootel)

// let h2 = React.createElement(
//     "h2",
//     null,
//   "hello from react cdn"
// );
// let root = ReactDOM.createRoot(rootel);
// root.render([h1,h2]);


let rootel = document.getElementById('root')
let div = (
  <div>
    <h1>hi i am a div {1 + 2}</h1>
  </div>
);

let root = ReactDOM.createRoot(rootel);
root.render(div)