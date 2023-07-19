import CatalogItem from "./CatalogItem";
import Header from "../Header";

function Catalog() {
  return (
    <div>
      <Header />
      <CatalogItem />
      <CatalogItem />

      <nav className="navbar fixed-bottom navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Fixed bottom
        </a>
      </nav>
    </div>
  );
}

export default Catalog;
