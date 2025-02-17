import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
