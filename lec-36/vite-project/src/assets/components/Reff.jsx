import React, { useRef, useState } from "react";
import { useEffect } from "react";

function Reff() {
  let [salary, setSalary] = useState(40000);
  let spanEl = useRef();
  console.log(spanEl, "a");

  useEffect(function() {
    setTimeout(() => {
      spanEl.current.innerHTML= "20";
    }, 3000);
  }, []);
  return (
    <div>
      my salary : <span ref={spanEl}>{salary}</span>
    </div>
  );
}

export default Reff;
