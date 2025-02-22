import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";
import NotFound from "./components/NotFound";
import { useEffect } from "react";

function App() {
  const currentLocation = useLocation();

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = currentLocation.pathname;
    }
  }, [currentLocation]);

  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
