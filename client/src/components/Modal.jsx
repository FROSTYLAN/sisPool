import React, { useState } from "react";
import "./Modal.css";
import FormCargo from "./Forms/FormCargo";
import FormAlumno from "./Forms/FormAlumno";
import FormPersonal from "./Forms/FormPersonal";
import FormDia from "./Forms/FormDia";
import FormTurno from "./Forms/FormTurno";
import FormPiscina from "./Forms/FormPiscina";
import FormNivel from "./Forms/FormNivel";
import FormProgramacion from "./Forms/FormProgramacion";
import FormDescuento from "./Forms/FormDescuento";
import FormTarifa from "./Forms/FormTarifa";
import FormVacante from "./Forms/FormVacante";
import FormMatricula from "./Forms/FormMatricula";

const Modal = ({ work, entity, data, API_URL, fnUpdateTable, ID }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className={work + ""} onClick={openModal}>
        {work === "update" ? "Actualizar" : "Nuevo +"}
      </button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>
              {work === "update"
                ? `ACTUALIZAR ${entity.toUpperCase()}`
                : `REGISTRAR ${entity.toUpperCase()}`}
            </h2>
            <div>
              {(() => {
                switch (entity) {
                  case "cargo":
                    return (
                      <FormCargo
                        work={work}
                        API_URL={API_URL}
                        entity={entity}
                        ID={ID}
                        closeModal={closeModal}
                        fnUpdateTable={fnUpdateTable}
                      />
                    );
                  case "alumno":
                    return (
                      <FormAlumno
                        work={work}
                        API_URL={API_URL}
                        entity={entity}
                        ID={ID}
                        closeModal={closeModal}
                        fnUpdateTable={fnUpdateTable}
                      />
                    );
                  case "personal":
                    return (
                      <FormPersonal
                        work={work}
                        API_URL={API_URL}
                        entity={entity}
                        ID={ID}
                        closeModal={closeModal}
                        fnUpdateTable={fnUpdateTable}
                      />
                    );
                  case "dia":
                    return (
                      <FormDia
                        work={work}
                        API_URL={API_URL}
                        entity={entity}
                        ID={ID}
                        closeModal={closeModal}
                        fnUpdateTable={fnUpdateTable}
                      />
                    );
                  case "turno":
                    return (
                      <FormTurno
                        work={work}
                        API_URL={API_URL}
                        entity={entity}
                        ID={ID}
                        closeModal={closeModal}
                        fnUpdateTable={fnUpdateTable}
                      />
                    );
                  case "piscina":
                    return (
                      <FormPiscina
                        work={work}
                        API_URL={API_URL}
                        entity={entity}
                        ID={ID}
                        closeModal={closeModal}
                        fnUpdateTable={fnUpdateTable}
                      />
                    );
                  case "nivel":
                    return (
                      <FormNivel
                        work={work}
                        API_URL={API_URL}
                        entity={entity}
                        ID={ID}
                        closeModal={closeModal}
                        fnUpdateTable={fnUpdateTable}
                      />
                    );
                  case "programacion":
                    return (
                      <FormProgramacion
                        work={work}
                        API_URL={API_URL}
                        entity={entity}
                        ID={ID}
                        closeModal={closeModal}
                        fnUpdateTable={fnUpdateTable}
                      />
                    );
                  case "descuento":
                    return (
                      <FormDescuento
                        work={work}
                        API_URL={API_URL}
                        entity={entity}
                        ID={ID}
                        closeModal={closeModal}
                        fnUpdateTable={fnUpdateTable}
                      />
                    );
                  case "tarifa":
                    return (
                      <FormTarifa
                        work={work}
                        API_URL={API_URL}
                        entity={entity}
                        ID={ID}
                        closeModal={closeModal}
                        fnUpdateTable={fnUpdateTable}
                      />
                    );
                  case "vacante":
                    return (
                      <FormVacante
                        work={work}
                        API_URL={API_URL}
                        entity={entity}
                        ID={ID}
                        closeModal={closeModal}
                        fnUpdateTable={fnUpdateTable}
                      />
                    );
                  case "matricula":
                    return (
                      <FormMatricula
                        work={work}
                        API_URL={API_URL}
                        entity={entity}
                        ID={ID}
                        closeModal={closeModal}
                        fnUpdateTable={fnUpdateTable}
                      />
                    );
                  default:
                    return null;
                }
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
