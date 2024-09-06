import React, { useState } from 'react'

function NaambadalDunga(props) {
    // let naam = props.naam
    function handleClick() {
        console.log(naam);
        Setname("anonymous")
        SetUmar(0)
        SetKaam("nalla")
        console.log(naam);
        // batchingggg concept
    }

    let [naam, Setname] = useState(props.naam);
    let [umar, SetUmar] = useState(props.age);
    let [kaam, SetKaam] = useState(props.domain);

  return (
    <div>
      <h1>Name :{naam}</h1>
      <h2>Age : {umar}</h2>    
          <h3>Domain : {kaam}</h3>
        <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default NaambadalDunga