import React from 'react'
import { useState ,memo } from 'react'

function Myfrag() {
    let [dogname, setDogName] = useState("maevrick")
    
    function changeName() {
        setDogName(Math.floor(Math.random()*10))
    }
  return (
    <>
      <Mine person={dogname} />
      <button onClick={changeName}>Naambadlo</button>

      <Mine person="tiger" />
      <Mine person="simba" />
      <Mine person="blacky" />
    </>
  );
}

let Mine = memo(function() {
    return (
        <div>
            <h1>Mine</h1>
        </div>
    )
})

export default Myfrag