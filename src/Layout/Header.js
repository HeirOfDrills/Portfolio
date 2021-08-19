import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";

export default function Header() {
  const history = useHistory();
  return (
    <header>
      <h1 className="title-text" onClick={() => history.push("/")}>
        Trevor Glascock
      </h1>
      <NavBar type="header" />
    </header>
  );
}
