import EditCatalogItem from "./EditCatalogItem";
import Header from "../Header";
import AddCatalogItem from "./AddCatalogItem";

function Catalog() {
  const itemsData = [
    {
      title: "Lorem",
      price: "200",
      qtyRemaining: "10",
      imgUrl: "null",
      desc: "",
      id: "123",
    },
    {
      title: "Lorem",
      price: "200",
      qtyRemaining: "15",
      imgUrl: "null",
      desc: "",
      id: "234",
    },
  ];

  const listItems = itemsData.map((item) => {
    return (
      <EditCatalogItem
        key={item.id}
        title={item.title}
        price={item.price}
        quantity={item.qtyRemaining}
      />
    );
  });

  return (
    <div>
      <Header />
      <ul className="list-group">{listItems}</ul>
      <nav className="navbar fixed-bottom footer-btn">
        <AddCatalogItem></AddCatalogItem>
      </nav>
    </div>
  );
}

export default Catalog;
