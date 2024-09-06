import React, { memo, useCallback, useState } from "react";

function Users() {
  let [count, Setcount] = useState(0);
    // let a = 1;

    let a = useCallback(function () {
        console.log("samarth teaching callback");
    },[])
    

  return (
      <div>
          <Demoo b={ a}/>
      <button onClick={() => Setcount(count + 1)}>Count - {count}</button>
    </div>
  );
}

let Demoo = memo(function ({ b }) {
    return <h1>hello from { b}</h1>
})

export default Users;
