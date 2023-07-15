import axios from "axios";
import React, { useState, useEffect } from "react";

const FormAlumno = ({
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
  const [EDAD, setEDAD] = useState("");
  const [TELEFONO, setTELEFONO] = useState("");
  const [DIRECCION, setDIRECCION] = useState("");
  const [SEXO, setSEXO] = useState("default");
  const [TIPO, setTIPO] = useState("default");

  useEffect(() => {
    if (work === "update") {
      console.log(API_URL + entity + "/" + ID);
      axios.get(API_URL + entity + "/" + ID).then((res) => {
        setDNI(res.data.DNI);
        setNOMBRES(res.data.NOMBRES);
        setAPELLIDOS(res.data.APELLIDOS);
        setEDAD(res.data.EDAD);
        setTELEFONO(res.data.TELEFONO);
        setDIRECCION(res.data.DIRECCION);
        setSEXO(res.data.SEXO);
        setTIPO(res.data.TIPO);
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
          EDAD,
          DIRECCION,
          TELEFONO,
          SEXO,
          TIPO,
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
          EDAD,
          DIRECCION,
          TELEFONO,
          SEXO,
          TIPO,
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
        Edad:
        <input
          type="text"
          value={EDAD}
          onChange={(e) => setEDAD(e.target.value)}
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
        Sexo:
        <select value={SEXO} onChange={(e) => setSEXO(e.target.value)}>
          <option value="default">-- Escoja --</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
      </label>
      <label>
        Tipo:
        <select value={TIPO} onChange={(e) => setTIPO(e.target.value)}>
          <option value="default">-- Escoga --</option>
          <option value="interno">Interno</option>
          <option value="externo">Externo</option>
        </select>
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormAlumno;
