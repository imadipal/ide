import "./App.css";
import Foot from "./layouts/Foot";
import { HomePage } from "./layouts/HomePage";
import Nav from "./layouts/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Nav />
        <div className="flex-grow-1">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />}>
              <Route index element={<HomePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
        <Foot />
      </div>
    </>
  );
}

export default App;
