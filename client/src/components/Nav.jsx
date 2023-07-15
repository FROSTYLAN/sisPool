import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="Nav">
      <ul>
        <Link to={"/"}>LOGO AQUI</Link>
      </ul>
      <ul className="nav-list">
        <li className="nav-item">
          <p className="nav-title">Mantenedor</p>
          <ul>
            <li>
              <Link to={"/alumno"}>Alumnos</Link>
            </li>
            <li>
              <Link to={"/cargo"}>Cargos</Link>
            </li>
            <li>
              <Link to={"/personal"}>Personal</Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <p className="nav-title">Horarios</p>
          <ul>
            <li>
              <Link to={"/dia"}>Dias</Link>
            </li>
            <li>
              <Link to={"/turno"}>Turnos</Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <p className="nav-title">Programación</p>
          <ul>
            <li>
              <Link to={"/programacion"}>Programación</Link>
            </li>
            <li>
              <Link to={"/vacante"}>Vacantes</Link>
            </li>
            <li>
              <Link to={"/piscina"}>Piscinas</Link>
            </li>
            <li>
              <Link to={"/nivel"}>Nivel</Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <p className="nav-title">Tarifas</p>
          <ul>
            <li>
              <Link to={"/monto"}>Monto</Link>
            </li>
            <li>
              <Link to={"/descuento"}>Descuentos</Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <p className="nav-title">Matrículas</p>
          <ul>
            <li>
              <Link to={"/matricula"}>Matriculas</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
