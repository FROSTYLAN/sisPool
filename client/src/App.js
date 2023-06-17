import { Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Nav from "./components/Nav";

// Pages
import Home from "./pages/Home";
import ControlPanel from "./pages/ControlPanel";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route
          index
          path="/alumno"
          element={<ControlPanel entity="alumno" />}
        />
        <Route index path="/cargo" element={<ControlPanel entity="cargo" />} />
        <Route
          index
          path="/personal"
          element={<ControlPanel entity="personal" />}
        />
        <Route index path="/dia" element={<ControlPanel entity="dia" />} />
        <Route index path="/turno" element={<ControlPanel entity="turno" />} />
        <Route
          index
          path="/programacion"
          element={<ControlPanel entity="programacion" />}
        />
        <Route
          index
          path="/piscina"
          element={<ControlPanel entity="piscina" />}
        />
        <Route index path="/nivel" element={<ControlPanel entity="nivel" />} />

        <Route index path="/monto" element={<ControlPanel entity="monto" />} />
        <Route
          index
          path="/descuento"
          element={<ControlPanel entity="descuento" />}
        />
      </Routes>
    </div>
  );
}

export default App;
