import axios from "axios";
import React from "react";
import Modal from "./Modal";

export default function TablaDatos({ entity, API_URL, data, fnUpdateTable }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No hay datos para mostrar.</p>;
  }

  let columns = Object.keys(data[0]).filter((col) => col !== "STATUS");

  const handleEliminar = (id) => {
    axios
      .delete(`${API_URL}${entity}/${id}`)
      .then(() => fnUpdateTable())
      .catch((error) => {
        console.error("Error al eliminar el dato:", error);
      });
  };

  return (
    <table className="tabla-datos">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>
              {col.startsWith("Personal")
                ? col.includes(".")
                  ? col.split(".")[1]
                  : col
                : col.includes(".")
                ? col.split(".")[0].toUpperCase()
                : col}
            </th>
          ))}
          <th>ACCIONES</th> {/* Columna para los botones de acción */}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col}>
                {col.startsWith("FECHA")
                  ? new Date(row[col]).toLocaleDateString("es-ES")
                  : row[col]}
              </td>
            ))}
            <td>
              <button
                onClick={() => handleEliminar(row.ID ? row.ID : row.DNI)}
                className="delete-btn"
              >
                Eliminar
              </button>
              <Modal
                work="update"
                entity={entity}
                API_URL={API_URL}
                data={data}
                fnUpdateTable={fnUpdateTable}
                ID={row.ID ? row.ID : row.DNI}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
