import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" className="nav-logo" />
      </nav>
    </header>
  );
}
