import axios from "axios";
import React, { useState, useEffect } from "react";

const FormTurno = ({
  work,
  entity,
  API_URL,
  ID,
  closeModal,
  fnUpdateTable,
}) => {
  const [DESCRIPCION, setDESCRIPCION] = useState("");
  const [IDDIAS, setIDDIAS] = useState("");

  const [dias, setDias] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL + "dia")
      .then((res) => setDias(res.data))
      .catch((err) => console.log(err));
  }, [API_URL]);

  useEffect(() => {
    if (work === "update") {
      axios.get(API_URL + entity + "/" + ID).then((res) => {
        setDESCRIPCION(res.data.DESCRIPCION);
        setIDDIAS(res.data.IDDIAS);
      });
    }
  }, [work, API_URL, ID, entity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (work === "update") {
      axios
        .patch(API_URL + entity + "/" + ID, { DESCRIPCION, IDDIAS })
        .then(() => {
          fnUpdateTable();
          closeModal();
        });
    } else if (work === "create") {
      axios.post(API_URL + entity, { DESCRIPCION, IDDIAS }).then(() => {
        fnUpdateTable();
        closeModal();
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Descripción:
        <input
          type="text"
          value={DESCRIPCION}
          onChange={(e) => setDESCRIPCION(e.target.value)}
        />
      </label>
      <label>
        Días:
        <select value={IDDIAS} onChange={(e) => setIDDIAS(e.target.value)}>
          <option value="default">-- Escoga --</option>
          {dias.map((cargo) => (
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

export default FormTurno;
