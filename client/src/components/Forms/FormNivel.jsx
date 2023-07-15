import axios from "axios";
import React, { useState, useEffect } from "react";

const FormNivel = ({
  work,
  entity,
  API_URL,
  ID,
  closeModal,
  fnUpdateTable,
}) => {
  const [DESCRIPCION, setDESCRIPCION] = useState("");
  const [ABREVIATURA, setABREVIATURA] = useState("");

  useEffect(() => {
    if (work === "update") {
      axios.get(API_URL + entity + "/" + ID).then((res) => {
        setDESCRIPCION(res.data.DESCRIPCION);
        setABREVIATURA(res.data.DESCRIPCION);
      });
    }
  }, [work, API_URL, ID, entity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (work === "update") {
      axios
        .patch(API_URL + entity + "/" + ID, { DESCRIPCION, ABREVIATURA })
        .then(() => {
          fnUpdateTable();
          closeModal();
        });
    } else if (work === "create") {
      axios.post(API_URL + entity, { DESCRIPCION, ABREVIATURA }).then(() => {
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
        Abreviatura:
        <input
          type="text"
          value={ABREVIATURA}
          onChange={(e) => setABREVIATURA(e.target.value)}
        />
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormNivel;
