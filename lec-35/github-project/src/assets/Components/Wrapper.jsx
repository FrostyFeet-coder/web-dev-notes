import React from "react";

// function Wrapper() {
//   return <div>this is div</div>;
// }

function Wrapper({children}) {
    return <div>{children}</div>
}


export function ChildWrapper() {
  return (
    <div>
      <h1>i am a child</h1>
    </div>
  );
}

export default Wrapper;
