import axios from "axios";
import React, { useState, useEffect } from "react";

const FormDia = ({ work, entity, API_URL, ID, closeModal, fnUpdateTable }) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (work === "update") {
      axios
        .get(API_URL + entity + "/" + ID)
        .then((res) => setDescription(res.data.DESCRIPCION));
    }
  }, [work, API_URL, ID, entity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (work === "update") {
      axios
        .patch(API_URL + entity + "/" + ID, { DESCRIPCION: description })
        .then(() => {
          fnUpdateTable();
          closeModal();
        });
    } else if (work === "create") {
      axios.post(API_URL + entity, { DESCRIPCION: description }).then(() => {
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormDia;
