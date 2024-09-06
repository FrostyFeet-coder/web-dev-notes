import React, { useRef, useState } from "react";

function Refff() {
  let [count, Setcount] = useState(0);

//   function handleIncrement() {
//     Setcount(count + 1);
//     console.log(count);
//   }

  let countRef = useRef(0);
  console.log(countRef, "sama");
  function handleIncrement() {
    countRef.current++;
    console.log(countRef);
  }
  return (
    <div>
      <h1>Count - {countRef.current}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Refff;
