import axios from "axios";
import React, { useState, useEffect } from "react";

const FormMatricula = ({
  work,
  entity,
  API_URL,
  ID,
  closeModal,
  fnUpdateTable,
}) => {
  const [IDALUMNO, setIDALUMNO] = useState("");
  const [IDVACANTE, setIDVACANTE] = useState("");
  const [IDMONTO, setIDMONTO] = useState("");
  const [IDDESCUENTO, setIDDESCUENTO] = useState("");

  const [alumnos, setAlumnos] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL + "alumno/names")
      .then((res) => setAlumnos(res.data))
      .catch((err) => console.log(err));
  }, [API_URL]);

  const [vacantes, setVacantes] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL + "vacante/names")
      .then((res) => setVacantes(res.data))
      .catch((err) => console.log(err));
  }, [API_URL]);

  const [tarifas, setTarifas] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL + "tarifa")
      .then((res) => setTarifas(res.data))
      .catch((err) => console.log(err));
  }, [API_URL]);

  const [descuentos, setDescuentos] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL + "descuento")
      .then((res) => setDescuentos(res.data))
      .catch((err) => console.log(err));
  }, [API_URL]);

  useEffect(() => {
    if (work === "update") {
      axios.get(API_URL + entity + "/" + ID).then((res) => {
        setIDALUMNO(res.data.IDALUMNO);
        setIDVACANTE(res.data.IDVACANTE);
        setIDMONTO(res.data.IDMONTO);
        setIDDESCUENTO(res.data.IDDESCUENTO);
      });
    }
  }, [work, API_URL, ID, entity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (work === "update") {
      axios
        .patch(API_URL + entity + "/" + ID, {
          IDALUMNO,
          IDVACANTE,
          IDMONTO,
          IDDESCUENTO,
        })
        .then(() => {
          fnUpdateTable();
          closeModal();
        });
    } else if (work === "create") {
      axios
        .post(API_URL + entity, {
          IDALUMNO,
          IDVACANTE,
          IDMONTO,
          IDDESCUENTO,
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
        Alumno:
        <select value={IDALUMNO} onChange={(e) => setIDALUMNO(e.target.value)}>
          <option value="default">-- Escoga --</option>
          {alumnos.map((alumno) => (
            <option key={alumno.DNI} value={alumno.DNI}>
              {alumno.ALUMNO}
            </option>
          ))}
        </select>
      </label>
      <label>
        Programacion:
        <select
          value={IDVACANTE}
          onChange={(e) => setIDVACANTE(e.target.value)}
        >
          <option value="default">-- Escoga --</option>
          {vacantes.map((vacante) => (
            <option key={vacante.ID} value={vacante.ID}>
              {vacante.PROGRAMACIONCLASE}
            </option>
          ))}
        </select>
      </label>
      <label>
        Tarifa:
        <select value={IDMONTO} onChange={(e) => setIDMONTO(e.target.value)}>
          <option value="default">-- Escoga --</option>
          {tarifas.map((tarifa) => (
            <option key={tarifa.ID} value={tarifa.ID}>
              {tarifa.DESCRIPCION + " (S/." + tarifa.MONTO + ")"}
            </option>
          ))}
        </select>
      </label>
      <label>
        Descuento:
        <select
          value={IDDESCUENTO}
          onChange={(e) => setIDDESCUENTO(e.target.value)}
        >
          <option value="default">-- Escoga --</option>
          {descuentos.map((descuento) => (
            <option key={descuento.ID} value={descuento.ID}>
              {descuento.DESCRIPCION + " (S/." + descuento.MONTO_DSCTO + ")"}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormMatricula;
