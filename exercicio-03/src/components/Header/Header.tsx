import { Link } from "react-router-dom";
import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div className="container navbar-container">
          <div>
            <Link to="/">
              <h1 className="site-title">MeuSite</h1>
            </Link>
          </div>
          <nav className="navbar">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "navbar-item navbar-link-active" : "navbar-item"
              }
            >
              Início
            </NavLink>
            <NavLink
              to="/promotion"
              className={({ isActive }) =>
                isActive ? "navbar-item navbar-link-active" : "navbar-item"
              }
            >
              Promoção
            </NavLink>
            <NavLink
              to="/subscription"
              className={({ isActive }) =>
                isActive ? "navbar-item navbar-link-active" : "navbar-item"
              }
            >
              Participar
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}
