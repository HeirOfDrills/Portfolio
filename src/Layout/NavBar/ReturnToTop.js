function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default function NavItem({ type = "header" }) {
  return type === "footer" ? (
    <li className="nav-item">
      <span className="nav-link clickable" onClick={() => scrollToTop()}>
        Return to Top
      </span>
    </li>
  ) : null;
}
