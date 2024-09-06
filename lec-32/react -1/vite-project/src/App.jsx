// function App() {
//   return <h1>hello from react JSX</h1>
// }

// export default App

// import React from 'react'

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default

import More from "./Components/more";
import Person from "./Components/person";
import Xyz from "./Components/xyz";
import Conditions from "./Components/Conditions";
import Events from "./Components/Events";

function App() {
  return (
    // <Xyz></Xyz>
    <>
      {/* <Person /> */}
      {/* <More></More> */}
      <Conditions />
      <Events/>
    </>
  );
}

function Merc() {
  return <h1>hello from merc</h1>;
}

function Bmw() {
  return <h1>hello from bmw</h1>;
}

export { App, Bmw, Merc };
