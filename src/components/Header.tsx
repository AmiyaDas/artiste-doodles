import logoUrl from "../assets/logo.jpg";

function Header() {
  return (
    <>
      <div className="header-icon-bar">
        <a href="https://www.instagram.com/artistedoodles.jewellery/">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://www.facebook.com/artistedoodles.jewellery">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://wa.me/918100603589">
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
      <nav className="navbar navbar-light sticky-top navbar-bg">
        <a className="navbar-brand title" href="/">
          <img src={logoUrl} className="d-inline-block align-top header-img" />
          Artiste Doodles
        </a>
      </nav>
    </>
  );
}

export default Header;
