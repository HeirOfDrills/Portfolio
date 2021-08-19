export default function Header() {
  return (
    <footer>
      <nav className="nav-bar">
        <ul id="foot-menu" className="nav-menu">
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
          <li className="nav-item">
            <a href="#top" className="nav-link">
              Return to Top
            </a>
          </li>
        </ul>
      </nav>
      <h6 className="trademark">The Glascock™ - 2021</h6>
    </footer>
  );
}
