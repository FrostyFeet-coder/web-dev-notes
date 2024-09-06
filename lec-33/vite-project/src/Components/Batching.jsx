import React, { useState } from 'react'

function Batching() {
    let [count, setCount] = useState(0)
    // function handleIncrement() {
    //     setCount(count + 1);
    //     setCount(count + 1);
    //     setCount(count + 1);
    // }
    function handleIncrement() {
        setCount((count) => {
          return count+1
        });
        setCount((count) => {
          return count + 1;
        });      
        setCount((count) => {
          return count + 1;
        });
    }
  return (
      <div>
          <button onClick={handleIncrement}>Count :{ count}</button>
    </div>
  )
}

export default Batching