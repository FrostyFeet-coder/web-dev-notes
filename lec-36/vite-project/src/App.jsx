import React, { Suspense } from "react";
// import Users from "./assets/components/Users";
// import Ref from "./assets/components/Ref";
// import Reff from "./assets/components/Reff";
// import Refff from "./assets/components/Refff";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Link,
} from "react-router-dom";
// import Dashboard from "./assets/components/Dashboard";
const Dashboard = React.lazy(() => {
  import("./assets/components/Dashboard");
});

import Home from "./assets/components/Home";

function App() {
  let navigate = useNavigate();

  function handleClick1() {
    // window.location.href = "/dashboard";
    navigate("/dashboard"); //good technique
  }
  function handleClick2() {
    // window.location.href = "/home"; wrong technique
    navigate("/home");
  }

  return (
    <div>
      {/* <Users></Users>
      // <Ref></Ref>
      // <Reff></Reff> */}
      {/* // <Refff></Refff> */}
      <nav
        style={{
          height: "50px",
          border: "2px solid black",
          backgroundColor: "pink",
        }}
      >
        {" "}
        <div>Mai nAvbar hu</div>
        <button onClick={handleClick1}>go to dashboard</button>
        <button onClick={handleClick2}>go to home</button>
        {/* <a href="/home">hoem</a> */}
        <Link to="/home">hoem </Link>
        <Link to="/dashboard">dash</Link>
      </nav>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Suspense>
              <Dashboard />
            </Suspense>
          }
        ></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
