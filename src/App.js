import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landingPage";
import Location from "./pages/locationPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Fragment>
  );
}

export default App;
