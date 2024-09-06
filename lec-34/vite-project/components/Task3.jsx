import React, { useState } from "react";

function Task3() {
  let arr = [
    // { title: "1 vs 1", todo: "rajat vs rajbir"},
    // { title: "1 vs 2", todo: "rajat vs rajbir + balbir"},
    // { title: "1 vs 1 vs 1", todo: "rajat vs rajbir + police"},
  ];
  let [arrays, setArrays] = useState(arr);
  return (
    <div>
      <AddTodo arrays={arrays} setArrays={setArrays} />
      <ChotaTask todos={arrays} />
    </div>
  );
}

function AddTodo({ arrays, setArrays }) {
  let [inp1, setInp1] = useState("");
  let [inp2, setInp2] = useState("");

  function handleInp1(e) {
    setInp1(e.target.value);
  }
  function handleInp2(e) {
    setInp2(e.target.value);
  }
  function handleAdd() {
    console.log("hello");
    console.log(arrays);
    setArrays([...arrays, { title: inp1, todo: inp2 }]);
  }
  return (
    <div>
      <input onChange={handleInp1} type="text" value={inp1} />
      <input onChange={handleInp2} type="text" value={inp2} />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
}

function ChotaTask({ todos }) {
  return todos.map((item, index) => (
    <div key={index}>
      <h1>Title:{item.title}</h1>
      <h1>Todo:{item.todo}</h1>
    </div>
  ));
}
export default Task3;
