import AdminCatalogItem from "./AdminCatalogItem";
import Header from "../Header";
import AddCatalogItem from "./AddCatalogItem";
import { useState } from "react";

function Catalog() {
  const [showToast, setShowToast] = useState(false);

  const itemsData = [
    {
      title: "Lorem",
      price: "200",
      qtyRemaining: "10",
      imgUrl: "null",
      desc: "Some description to show there is something here",
      id: "123",
    },
    {
      title: "Lorem",
      price: "200",
      qtyRemaining: "15",
      imgUrl: "null",
      desc: "Some description to show there is something here",
      id: "234",
    },
  ];

  const toggleShowToast = () => {
    setShowToast(!showToast);
  };

  const listItems = itemsData.map((item) => {
    return (
      <AdminCatalogItem
        key={item.id}
        title={item.title}
        price={item.price}
        quantity={item.qtyRemaining}
        desc={item.desc}
        imgName={item.imgUrl}
        id={item.id}
        deleteHandler={toggleShowToast}
      />
    );
  });

  return (
    <div>
      <Header />
      <ul className="list-group">{listItems}</ul>
      {/* {showToast == true && ( */}
      <div
        className={"toast align-items-center" + (showToast ? " show" : "")}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex bottom-0 start-50">
          <div className="toast-body">Item deleted successfully!</div>
          <button
            type="button"
            className="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={toggleShowToast}
          ></button>
        </div>
      </div>
      {/* )} */}
      <nav className="navbar fixed-bottom footer-btn">
        <AddCatalogItem></AddCatalogItem>
      </nav>
    </div>
  );
}

export default Catalog;
