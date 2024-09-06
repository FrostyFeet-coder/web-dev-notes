import React, { useMemo, useState } from "react";

function Memo() {
  let [count, Setcount] = useState(0);
  let [inp, setInp] = useState("");
  function handleInput(e) {
    setInp(e.target.value);
  }

  let memoval = useMemo(() => {
    let ans = 0;
    for (let i = 1; i <= inp; i++) {
      console.log("hello");
      ans = ans + i;
      } return ans;
  },[inp]);

  function handleCounter() {
    Setcount(count + 1);
  }

  return (
    <div>
      <input onChange={handleInput} type="text" value={inp} />
      <h1>Sum : {memoval}</h1>
      <button onClick={handleCounter}>Counter={count} </button>
    </div>
  );
}

export default Memo;
