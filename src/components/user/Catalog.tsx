import CatalogItem from "./CatalogItem";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

function Catalog() {
  const navigate = useNavigate();

  const itemsData = [
    {
      title: "Lorem",
      price: "200",
      qtyRemaining: "10",
      imgUrl: "null",
      id: "123",
    },
    {
      title: "Lorem",
      price: "200",
      qtyRemaining: "15",
      imgUrl: "null",
      id: "234",
    },
  ];

  const listItems = itemsData.map((item) => {
    return (
      <CatalogItem
        key={item.id}
        title={item.title}
        price={item.price}
        qtyRemaining={item.qtyRemaining}
      />
    );
  });

  const onProceed = () => {
    navigate("/checkout", { replace: true, state: { data: true } });
  };

  return (
    <div>
      <Header />
      <ul className="list-group">{listItems}</ul>
      <nav className="navbar fixed-bottom footer-btn">
        <button type="button" className="btn btn-primary" onClick={onProceed}>
          Proceed
        </button>
      </nav>
    </div>
  );
}

export default Catalog;
