import axios from "axios";
import React, { useState, useEffect } from "react";

const FormPiscina = ({
  work,
  entity,
  API_URL,
  ID,
  closeModal,
  fnUpdateTable,
}) => {
  const [DESCRIPCION, setDESCRIPCION] = useState("");

  useEffect(() => {
    if (work === "update") {
      axios
        .get(API_URL + entity + "/" + ID)
        .then((res) => setDESCRIPCION(res.data.DESCRIPCION));
    }
  }, [work, API_URL, ID, entity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (work === "update") {
      axios.patch(API_URL + entity + "/" + ID, { DESCRIPCION }).then(() => {
        fnUpdateTable();
        closeModal();
      });
    } else if (work === "create") {
      axios.post(API_URL + entity, { DESCRIPCION }).then(() => {
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
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormPiscina;
