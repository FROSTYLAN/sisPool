import { Link } from "react-router-dom";

import Button from "../button/button.component";

import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.brand}>
        <Link to="/">Pool System</Link>
      </div>

      <nav className={classes.navigation}>
        {/* TODO: SET USER ID */}
        <Link className={classes["navigation__link"]} to="/profile/1">
          Perfil
        </Link>
        <br />
        <Link className={classes["navigation__link"]} to="/auth">
          Salir
        </Link>
      </nav>
    </header>
  );
};

export default Header;
