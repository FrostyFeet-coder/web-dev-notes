import React from "react";

function person() {
  // Statements

  let a = 100;
  let b = null;
  let c = true;
  let d = false;
  let e = undefined;

  return (
    <>
      <div>person : {a}</div>
      <div>person : {JSON.stringify(b)}</div>
      <div>person : {JSON.stringify(c)}</div>
      <div>person : {JSON.stringify(d)}</div>
      <div>person : {JSON.stringify(e)}</div>
    </>
  );
}

export default person;
