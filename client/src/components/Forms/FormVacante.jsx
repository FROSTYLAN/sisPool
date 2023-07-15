import axios from "axios";
import React, { useState, useEffect } from "react";

const FormVacante = ({
  work,
  entity,
  API_URL,
  ID,
  closeModal,
  fnUpdateTable,
}) => {
  const [MES, setMES] = useState("");
  const [NROVACANTES, setNROVACANTES] = useState("");
  const [IDPROGRAMACIONCLASE, setIDPROGRAMACIONCLASE] = useState("");

  const [programaciones, setProgramaciones] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL + "programacion/names")
      .then((res) => setProgramaciones(res.data))
      .catch((err) => console.log(err));
  }, [API_URL]);

  useEffect(() => {
    if (work === "update") {
      axios.get(API_URL + entity + "/" + ID).then((res) => {
        setMES(res.data.MES);
        setNROVACANTES(res.data.NROVACANTES);
        setIDPROGRAMACIONCLASE(res.data.IDPROGRAMACIONCLASE);
      });
    }
  }, [work, API_URL, ID, entity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (work === "update") {
      axios
        .patch(API_URL + entity + "/" + ID, {
          MES,
          NROVACANTES,
          IDPROGRAMACIONCLASE,
        })
        .then(() => {
          fnUpdateTable();
          closeModal();
        });
    } else if (work === "create") {
      axios
        .post(API_URL + entity, { MES, NROVACANTES, IDPROGRAMACIONCLASE })
        .then(() => {
          fnUpdateTable();
          closeModal();
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Programacion:
        <select
          value={IDPROGRAMACIONCLASE}
          onChange={(e) => setIDPROGRAMACIONCLASE(e.target.value)}
        >
          <option value="default">-- Escoga --</option>
          {programaciones.map((prog) => (
            <option value={prog.ID}>{prog.DESCRIPCION}</option>
          ))}
        </select>
      </label>
      <label>
        Mes:
        <select value={MES} onChange={(e) => setMES(e.target.value)}>
          <option value="default">-- Escoga --</option>
          <option value="ENERO">ENERO</option>
          <option value="FEBRERO">FEBRERO</option>
          <option value="MARZO">MARZO</option>
          <option value="ABRIL">ABRIL</option>
          <option value="MAYO">MAYO</option>
          <option value="JUNIO">JUNIO</option>
          <option value="JULIO">JULIO</option>
          <option value="AGOSTO">AGOSTO</option>
          <option value="SEPTIEMBRE">SEPTIEMBRE</option>
          <option value="OCTUBRE">OCTUBRE</option>
          <option value="NOVIEMBRE">NOVIEMBRE</option>
          <option value="DICIEMBRE">DICIEMBRE</option>
        </select>
      </label>
      <label>
        Nro de vacantes:
        <input
          type="number"
          value={NROVACANTES}
          onChange={(e) => setNROVACANTES(e.target.value)}
        />
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormVacante;
