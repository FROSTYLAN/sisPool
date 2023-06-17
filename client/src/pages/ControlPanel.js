export default function ControlPanel({ entity }) {
  return (
    <div className="Alumno">
      <h1>RESGISTRAR {entity.toUpperCase()}</h1>

      <section className="btn-container">
        <button>Nuevo</button>
        <button>Grabar</button>
        <button>Modificar</button>
        <button>Eliminar</button>
        <button>Cancelar</button>
      </section>

      <section>
        <p>
          <b>Buscar por:</b>
        </p>
        <select></select>
        <input value=""></input>
        <button>Buscar</button>
      </section>

      <section className="table-container">Aun no hay {entity + "s"}</section>
    </div>
  );
}
