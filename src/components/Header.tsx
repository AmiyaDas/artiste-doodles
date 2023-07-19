import logoUrl from "../assets/logo.jpg";

function Header() {
  return (
    <nav className="navbar navbar-light sticky-top navbar-bg">
      <a className="navbar-brand title">
        {" "}
        <img src={logoUrl} className="d-inline-block align-top header-img" />
        Artiste Doodles
      </a>
    </nav>
  );
}

export default Header;
