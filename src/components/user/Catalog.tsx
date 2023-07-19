import CatalogItem from "./CatalogItem";
import Header from "../Header";

function Catalog() {
  return (
    <div>
      <Header />
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />

      <nav className="navbar fixed-bottom footer-btn">
        <button type="button" className="btn btn-primary">
          Proceed
        </button>
      </nav>
    </div>
  );
}

export default Catalog;
