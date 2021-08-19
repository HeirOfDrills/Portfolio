import NavItem from "./NavItem";
import ReturnToTop from "./ReturnToTop";

export default function NavBar({ type }) {
  return (
    <nav className="nav-bar">
      <ul id={`${type}-menu`} className="nav-menu">
        <NavItem title="About" />
        <NavItem title="Portfolio" />
        <NavItem title="Contact" />
        <ReturnToTop type={type} />
      </ul>
    </nav>
  );
}
