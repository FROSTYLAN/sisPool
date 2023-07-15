import axios from "axios";
import React, { useState, useEffect } from "react";

const FormProgramacion = ({
  work,
  entity,
  API_URL,
  ID,
  closeModal,
  fnUpdateTable,
}) => {
  const [IDPERSONAL, setIDPERSONAL] = useState("default");
  const [IDTURNO, setIDTURNO] = useState("default");
  const [IDNIVEL, setIDNIVEL] = useState("default");
  const [IDPISCINA, setIDPISCINA] = useState("default");

  const [personales, setPersonales] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL + "personal/names")
      .then((res) => setPersonales(res.data))
      .catch((err) => console.log(err));
  }, [API_URL]);

  const [turnos, setTurnos] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL + "turno")
      .then((res) => setTurnos(res.data))
      .catch((err) => console.log(err));
  }, [API_URL]);

  const [niveles, setNiveles] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL + "nivel")
      .then((res) => setNiveles(res.data))
      .catch((err) => console.log(err));
  }, [API_URL]);

  const [piscinas, setPiscinas] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL + "piscina")
      .then((res) => setPiscinas(res.data))
      .catch((err) => console.log(err));
  }, [API_URL]);

  useEffect(() => {
    if (work === "update") {
      axios.get(API_URL + entity + "/" + ID).then((res) => {
        setIDPERSONAL(res.data.IDPERSONAL);
        setIDTURNO(res.data.IDTURNO);
        setIDNIVEL(res.data.IDNIVEL);
        setIDPISCINA(res.data.IDPISCINA);
      });
    }
  }, [work, API_URL, ID, entity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (work === "update") {
      axios
        .patch(API_URL + entity + "/" + ID, {
          IDPERSONAL,
          IDTURNO,
          IDNIVEL,
          IDPISCINA,
        })
        .then(() => {
          fnUpdateTable();
          closeModal();
        });
    } else if (work === "create") {
      axios
        .post(API_URL + entity, {
          IDPERSONAL,
          IDTURNO,
          IDNIVEL,
          IDPISCINA,
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
        Personal:
        <select
          value={IDPERSONAL}
          onChange={(e) => setIDPERSONAL(e.target.value)}
        >
          <option value="default">-- Escoga --</option>
          {personales.map((cargo) => (
            <option key={cargo.DNI} value={cargo.DNI}>
              {cargo.EMPLEADO}
            </option>
          ))}
        </select>
      </label>
      <label>
        Turno:
        <select value={IDTURNO} onChange={(e) => setIDTURNO(e.target.value)}>
          <option value="default">-- Escoga --</option>
          {turnos.map((turno) => (
            <option key={turno.ID} value={turno.ID}>
              {turno.DESCRIPCION}
            </option>
          ))}
        </select>
      </label>
      <label>
        Nivel:
        <select value={IDNIVEL} onChange={(e) => setIDNIVEL(e.target.value)}>
          <option value="default">-- Escoga --</option>
          {niveles.map((nivel) => (
            <option key={nivel.ID} value={nivel.ID}>
              {nivel.DESCRIPCION}
            </option>
          ))}
        </select>
      </label>
      <label>
        Piscina:
        <select
          value={IDPISCINA}
          onChange={(e) => setIDPISCINA(e.target.value)}
        >
          <option value="default">-- Escoga --</option>
          {piscinas.map((piscina) => (
            <option key={piscina.ID} value={piscina.ID}>
              {piscina.DESCRIPCION}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormProgramacion;
