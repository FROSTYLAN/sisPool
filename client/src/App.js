import { Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Nav from "./components/Nav";

// Pages
import Home from "./pages/Home";
import ControlPanel from "./pages/ControlPanel";

function App() {
  const API_URL = "http://localhost:4000/api/v1/";

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route
          index
          path="/alumno"
          element={
            <ControlPanel entity="alumno" API_URL={API_URL} oculteID={true} />
          }
        />
        <Route
          index
          path="/cargo"
          element={<ControlPanel entity="cargo" API_URL={API_URL} />}
        />
        <Route
          index
          path="/personal"
          element={<ControlPanel entity="personal" API_URL={API_URL} />}
        />
        <Route
          index
          path="/dia"
          element={<ControlPanel entity="dia" API_URL={API_URL} />}
        />
        <Route
          index
          path="/turno"
          element={<ControlPanel entity="turno" API_URL={API_URL} />}
        />
        <Route
          index
          path="/programacion"
          element={<ControlPanel entity="programacion" API_URL={API_URL} />}
        />
        <Route
          index
          path="/vacante"
          element={<ControlPanel entity="vacante" API_URL={API_URL} />}
        />
        <Route
          index
          path="/piscina"
          element={<ControlPanel entity="piscina" API_URL={API_URL} />}
        />
        <Route
          index
          path="/nivel"
          element={<ControlPanel entity="nivel" API_URL={API_URL} />}
        />

        <Route
          index
          path="/monto"
          element={<ControlPanel entity="tarifa" API_URL={API_URL} />}
        />
        <Route
          index
          path="/descuento"
          element={<ControlPanel entity="descuento" API_URL={API_URL} />}
        />
        <Route
          index
          path="/matricula"
          element={<ControlPanel entity="matricula" API_URL={API_URL} />}
        />
      </Routes>
    </div>
  );
}

export default App;
