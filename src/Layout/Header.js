export default function Header() {
  return (
    <header>
      <h1 className="title-text">Trevor Glascock</h1>
      <nav className="nav-bar">
        <ul id="head-menu" className="nav-menu">
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
    </header>
  );
}
