import { useLocation, useNavigate } from "react-router-dom";
import AppConstants from "../../AppConstants";
import Header from "../Header";
import { useEffect, useState } from "react";

function Checkout() {
  const navigate = useNavigate();

  const [checkoutItems, setCheckoutItems] = useState(useLocation().state);
  const [mrp, setMrp] = useState(0);
  // const checkoutItems =

  const onPlaceOrder = () => {
    let billingDetails = {
      price: mrp,
      delivery: AppConstants.DELIVERY_FEE,
      total: mrp + AppConstants.DELIVERY_FEE,
    };
    navigate("/order", {
      replace: false,
      state: { items: checkoutItems, billing: billingDetails },
    });
  };

  const removeItem = (id: string) => {
    let newCheckoutItems = checkoutItems.filter((item: any) => {
      return item.id !== id;
    });
    setCheckoutItems(newCheckoutItems);
    calculateMrp();
  };

  useEffect(() => {
    calculateMrp();
  }, []);

  const calculateMrp = () => {
    let totalMrp = 0;
    checkoutItems.forEach((item: any) => {
      totalMrp = totalMrp + item.quantity * item.price;
    });
    setMrp(totalMrp);
  };

  const listItems = checkoutItems.map((item: any) => {
    return (
      <li className="list-item" key={item.id}>
        <img
          src={
            AppConstants.IMAGE_URL +
            item.fileName +
            AppConstants.IMAGE_URL_SUFFIX
          }
          className="list-img"
        />
        <div className="item-info">
          <span className="item-info-title">{item.name}</span>
          <span className="item-info-subtitle">
            {"Qty: " + item.quantity + " x ₹" + item.price}
          </span>
        </div>
        <div className="item-buttons">
          <span className="badge-secondary">
            {parseInt(item.quantity) * parseFloat(item.price)}
          </span>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => removeItem(item.id)}
          >
            <i className="bi bi-trash3-fill"></i>
          </button>
        </div>
      </li>
    );
  });

  return (
    <>
      <Header />
      <ul>{listItems}</ul>
      <div className="total-section">
        <div className="price">
          <span>Total MRP</span>
          <span>{mrp}</span>
        </div>
        {/* <div className="discount">
          <span>Discount on MRP</span>
          <span className="price">-500</span>
        </div> */}
        <div className="delivery">
          <span>Delivery fee</span>
          <span>{AppConstants.DELIVERY_FEE}</span>
        </div>
        <div className="total">
          <span>Total Amount</span>
          <span>{mrp + AppConstants.DELIVERY_FEE}</span>
        </div>
      </div>
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
