import BBQIcons from "../BBQIcons";
import "./styles.css";

function Header() {
  return (
    <header className="header-component">
      <BBQIcons />
      <BBQIcons className="part2" />
      <BBQIcons className="part3" />
      <h1>Agenda Churras</h1>
    </header>
  );
}

export default Header;
