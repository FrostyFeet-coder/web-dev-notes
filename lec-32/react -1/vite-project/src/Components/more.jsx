import React from 'react'

function more() {
    let obj = {
        a: 10,
        b: "samarth"
    };
    let arr = [10,20,30]
  return (
    <div>
      {arr}
      <h1>{arr[0]}</h1>
      <h1>{arr["0"]}</h1>
    </div>
  );
}

export default more