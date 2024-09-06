import React from 'react'

function Events() {
    function handleClick1() {
       console.log("hello form 1");
   }
    function handleClick2() {
       console.log("hello from 2");
   }
     function handleClick3(a,b) {
       console.log(a+b);
     }
   
    return (
      <div>
        <button onClick={handleClick1}>CLick me 1</button>
        <button onClick={handleClick2}>CLick me 2</button>{" "}
        {/* <button onClick={(handleClick3(5, 6)}> CLick me </button> */ }
        <button onClick={() => handleClick3(5, 6)}> CLick me </button>
      </div>
    );
}

export default Events