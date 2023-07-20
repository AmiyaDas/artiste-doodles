import CatalogItem from "./CatalogItem";
import Header from "../Header";

function Catalog() {
  return (
    <div>
      <Header />
      <ul className="list-group">
        <CatalogItem
          title="Lorem"
          price="200"
          qtyRemaining="10"
          imgUrl="null"
        />
        <CatalogItem
          title="Lorem"
          price="200"
          qtyRemaining="10"
          imgUrl="null"
        />
        <CatalogItem
          title="Lorem"
          price="200"
          qtyRemaining="15"
          imgUrl="null"
        />
        <CatalogItem
          title="Lorem"
          price="200"
          qtyRemaining="10"
          imgUrl="null"
        />
        <CatalogItem
          title="Lorem"
          price="200"
          qtyRemaining="10"
          imgUrl="null"
        />
      </ul>
      <nav className="navbar fixed-bottom footer-btn">
        <button type="button" className="btn btn-primary">
          Proceed
        </button>
      </nav>
    </div>
  );
}

export default Catalog;
