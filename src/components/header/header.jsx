import { Link } from "react-router-dom";
import { Nav } from "../nav/nav.jsx";
import "./header.css";

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <Link to="/" className="brand-link">
            <div className="brand-text">
              <span className="brand-title">OVERCLOCK</span>
              <span className="brand-subtitle">Hardware & Periféricos</span>
            </div>
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
};