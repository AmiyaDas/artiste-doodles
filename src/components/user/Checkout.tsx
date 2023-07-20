import Header from "../Header";

function Checkout() {
  const itemsData = [
    {
      title: "Lorem",
      price: "200",
      quantity: "10",
      imgUrl: "null",
      id: "123",
    },
    {
      title: "Lorem",
      price: "200",
      quantity: "15",
      imgUrl: "null",
      id: "234",
    },
  ];

  const onPlaceOrder = () => {};

  const listItems = itemsData.map((item) => {
    return (
      <li className="list-item">
        <img src={item.imgUrl} className="list-img" />
        <div className="item-info">
          <span className="item-info-title">{item.title}</span>
          <span className="item-info-subtitle">{"Qty: " + item.quantity}</span>
        </div>
        <div className="item-buttons">
          <span className="badge-secondary">
            {parseInt(item.quantity) * parseFloat(item.price)}
          </span>
          <button type="button" className="btn btn-light">
            +
          </button>
        </div>
      </li>
    );
  });

  return (
    <>
      <Header />
      {listItems}
      <nav className="navbar fixed-bottom footer-btn">
        <button
          type="button"
          className="btn btn-primary"
          onClick={onPlaceOrder}
        >
          Place Order
        </button>
      </nav>
    </>
  );
}

export default Checkout;
