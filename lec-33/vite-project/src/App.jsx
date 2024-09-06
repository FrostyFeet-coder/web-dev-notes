import Person from "./Components/Person";
import NaambadalDunga from "./Components/NAAMbadalDunga";
import Batching from "./Components/Batching";
import Greeting from "./Components/Greeting";
// console.log(props,rajat);

function App() {
  return (
    <div>
      <h1>mai hu App.jsx</h1>
      {/* <Person name="ansh" age={20} favColor="red" isCommited="10" />
      <Person name="asd" age="20" favColor="black" isCommited="0" />
      <Person name="xyz" age="17" favColor="red" isCommited="0" />
      <Person /> */}

      {/* <NaambadalDunga naam="Ansh" age="22" domain="webdev" /> */}
      {/* <Batching /> */}
      <Greeting/>
    </div>
  );
}

export default App;
