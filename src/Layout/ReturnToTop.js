function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default function NavItem({ type = "header" }) {
  return type === "footer" ? (
    <li className="nav-item">
      <p className="nav-link" onClick={() => scrollToTop()}>
        Return to Top
      </p>
    </li>
  ) : null;
}
