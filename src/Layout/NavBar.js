export default function NavBar({ type  }) {
  return (
    <nav className="nav-bar">
      <ul id={`${type}-menu`} className="nav-menu">
        <li className="nav-item">
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#portfolio" className="nav-link">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
