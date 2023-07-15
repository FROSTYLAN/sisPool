import axios from "axios";
import React, { useState, useEffect } from "react";

const FormDescuento = ({
  work,
  entity,
  API_URL,
  ID,
  closeModal,
  fnUpdateTable,
}) => {
  const [DESCRIPCION, setDESCRIPCION] = useState("");
  const [MONTO_DSCTO, setMONTO_DSCTO] = useState("");

  useEffect(() => {
    if (work === "update") {
      axios.get(API_URL + entity + "/" + ID).then((res) => {
        setDESCRIPCION(res.data.DESCRIPCION);
        setMONTO_DSCTO(res.data.MONTO_DSCTO);
      });
    }
  }, [work, API_URL, ID, entity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (work === "update") {
      axios
        .patch(API_URL + entity + "/" + ID, { DESCRIPCION, MONTO_DSCTO })
        .then(() => {
          fnUpdateTable();
          closeModal();
        });
    } else if (work === "create") {
      axios.post(API_URL + entity, { DESCRIPCION, MONTO_DSCTO }).then(() => {
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
        Descuento:
        <input
          type="number"
          value={MONTO_DSCTO}
          onChange={(e) => setMONTO_DSCTO(e.target.value)}
        />
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormDescuento;
