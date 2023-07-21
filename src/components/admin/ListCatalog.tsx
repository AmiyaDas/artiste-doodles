import AdminCatalogItem from "./AdminCatalogItem";
import Header from "../Header";
import AddCatalogItem from "./AddCatalogItem";

function Catalog() {
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
