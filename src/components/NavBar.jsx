import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        
        <Link to="/">Tienda Tech</Link>
      </div>
      <nav className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/registro">Crear cuenta</Link>
        <Link to="/login">Iniciar sesión</Link>
      </nav>
    </header>
  );
}
