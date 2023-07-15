import axios from "axios";
import React, { useState, useEffect } from "react";

const FormTarifa = ({
  work,
  entity,
  API_URL,
  ID,
  closeModal,
  fnUpdateTable,
}) => {
  const [DESCRIPCION, setDESCRIPCION] = useState("");
  const [MONTO, setMONTO] = useState("");
  const [FECHAINICIO, setFECHAINICIO] = useState("");
  const [FECHAFINAL, setFECHAFINAL] = useState("");

  useEffect(() => {
    if (work === "update") {
      axios.get(API_URL + entity + "/" + ID).then((res) => {
        setDESCRIPCION(res.data.DESCRIPCION);
        setMONTO(res.data.MONTO);
        setFECHAINICIO(res.data.FECHAINICIO.slice(0, 10));
        setFECHAFINAL(res.data.FECHAFINAL.slice(0, 10));
      });
    }
  }, [work, API_URL, ID, entity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (work === "update") {
      axios
        .patch(API_URL + entity + "/" + ID, {
          DESCRIPCION,
          MONTO,
          FECHAINICIO,
          FECHAFINAL,
        })
        .then(() => {
          fnUpdateTable();
          closeModal();
        });
    } else if (work === "create") {
      axios
        .post(API_URL + entity, {
          DESCRIPCION,
          MONTO,
          FECHAINICIO,
          FECHAFINAL,
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
        Descripción:
        <input
          type="text"
          value={DESCRIPCION}
          onChange={(e) => setDESCRIPCION(e.target.value)}
        />
      </label>
      <label>
        Monto:
        <input
          type="number"
          value={MONTO}
          onChange={(e) => setMONTO(e.target.value)}
        />
      </label>
      <label>
        Fecha de inicio:
        <input
          type="date"
          value={FECHAINICIO}
          onChange={(e) => setFECHAINICIO(e.target.value)}
        />
      </label>
      <label>
        Fecha de fin:
        <input
          type="date"
          value={FECHAFINAL}
          onChange={(e) => setFECHAFINAL(e.target.value)}
        />
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormTarifa;
