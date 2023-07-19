import EditCatalogItem from "./EditCatalogItem";
import Header from "../Header";
import AddCatalogItem from "./AddCatalogItem";

function Catalog() {
  return (
    <div>
      <Header />
      <EditCatalogItem />
      <EditCatalogItem />

      <nav className="navbar fixed-bottom footer-btn">
        <AddCatalogItem></AddCatalogItem>
      </nav>
    </div>
  );
}

export default Catalog;
