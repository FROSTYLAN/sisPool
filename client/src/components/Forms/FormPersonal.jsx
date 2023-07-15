import axios from "axios";
import React, { useState, useEffect } from "react";

const FormPersonal = ({
  work,
  entity,
  API_URL,
  ID,
  closeModal,
  fnUpdateTable,
}) => {
  const [DNI, setDNI] = useState("");
  const [NOMBRES, setNOMBRES] = useState("");
  const [APELLIDOS, setAPELLIDOS] = useState("");
  const [TELEFONO, setTELEFONO] = useState("");
  const [DIRECCION, setDIRECCION] = useState("");
  const [IDCARGO, setIDCARGO] = useState("default");

  const [cargos, setCargos] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL + "cargo")
      .then((res) => setCargos(res.data))
      .catch((err) => console.log(err));
  }, [API_URL]);

  useEffect(() => {
    if (work === "update") {
      console.log(API_URL + entity + "/" + ID);
      axios.get(API_URL + entity + "/" + ID).then((res) => {
        setDNI(res.data.DNI);
        setNOMBRES(res.data.NOMBRES);
        setAPELLIDOS(res.data.APELLIDOS);
        setTELEFONO(res.data.TELEFONO);
        setDIRECCION(res.data.DIRECCION);
        setIDCARGO(res.data.IDCARGO);
      });
    }
  }, [work, API_URL, ID, entity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (work === "update") {
      axios
        .patch(API_URL + entity + "/" + ID, {
          DNI,
          APELLIDOS,
          NOMBRES,
          DIRECCION,
          TELEFONO,
          IDCARGO,
        })
        .then(() => {
          fnUpdateTable();
          closeModal();
        });
    } else if (work === "create") {
      axios
        .post(API_URL + entity, {
          DNI,
          APELLIDOS,
          NOMBRES,
          DIRECCION,
          TELEFONO,
          IDCARGO,
        })
        .then(() => {
          fnUpdateTable();
          closeModal();
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        DNI:
        <input
          type="text"
          value={DNI}
          onChange={(e) => setDNI(e.target.value)}
        />
      </label>
      <label>
        Apellidos:
        <input
          type="text"
          value={APELLIDOS}
          onChange={(e) => setAPELLIDOS(e.target.value)}
        />
      </label>
      <label>
        Nombres:
        <input
          type="text"
          value={NOMBRES}
          onChange={(e) => setNOMBRES(e.target.value)}
        />
      </label>
      <label>
        Dirección:
        <input
          type="text"
          value={DIRECCION}
          onChange={(e) => setDIRECCION(e.target.value)}
        />
      </label>
      <label>
        Telefono:
        <input
          type="text"
          value={TELEFONO}
          onChange={(e) => setTELEFONO(e.target.value)}
        />
      </label>
      <label>
        Tipo:
        <select value={IDCARGO} onChange={(e) => setIDCARGO(e.target.value)}>
          <option value="default">-- Escoga --</option>
          {cargos.map((cargo) => (
            <option key={cargo.ID} value={cargo.ID}>
              {cargo.DESCRIPCION}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormPersonal;
