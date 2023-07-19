import EditCatalogItem from "./EditCatalogItem";
import Header from "../Header";
import AddCatalogItem from "./AddCatalogItem";
import useCatalogModal from "./useCatalogModal";

function Catalog() {
  const {isShowing, toggle} = useCatalogModal();
  console.log(isShowing);
  return (
    <div>
      <Header />
      <button  type="button" className="btn btn-light" onClick={toggle}>Show Modal</button>
      <EditCatalogItem />
      <EditCatalogItem />

      <nav className="navbar fixed-bottom navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Fixed bottom
        </a>
      </nav>
      <AddCatalogItem
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
}

export default Catalog;
