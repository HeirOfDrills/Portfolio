import { Link } from "react-router-dom";

export default function NavItem({ title, destination }) {
  return (
    <li className="nav-item">
      <Link to={`/${title.toLowerCase()}`} className="nav-link">
        {title}
      </Link>
    </li>
  );
}
