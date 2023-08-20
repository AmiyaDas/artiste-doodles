import { useLocation, useNavigate } from "react-router-dom";
import AppConstants from "../../AppConstants";
import Header from "../Header";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Checkout() {
  const navigate = useNavigate();

  const [checkoutItems, setCheckoutItems] = useState(useLocation().state);
  const [mrp, setMrp] = useState(0);
  const [show, setShow] = useState(false);
  // const checkoutItems =
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    handleClose();
    if (newCheckoutItems.length <= 0) {
      navigate("/", {
        replace: true,
        state: { items: checkoutItems },
      });
    } else {
      calculateMrp();
    }
  };

  useEffect(() => {
    calculateMrp();
  }, [removeItem]);

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
            {"Qty: " + item.quantity + " x ₹ " + item.price}
          </span>
        </div>
        <div className="item-buttons">
          <span className="badge-secondary">
            {"₹ " + parseInt(item.quantity) * parseFloat(item.price)}
          </span>
          <span className="delete-button">
            <button
              type="button"
              className="btn btn-light"
              onClick={handleShow}
            >
              <i className="bi bi-trash3-fill"></i>
            </button>
          </span>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Are you sure you want to delete this item?
            </Modal.Title>
          </Modal.Header>
          {/* <Modal.Body>
            <h5>Are you sure you want to delete this item? </h5>
          </Modal.Body> */}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                removeItem(item.id);
              }}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
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
          <span>{"₹ " + mrp}</span>
        </div>
        {/* <div className="discount">
          <span>Discount on MRP</span>
          <span className="price">-500</span>
        </div> */}
        <div className="delivery">
          <span>Delivery fee</span>
          <span>{"₹ " + AppConstants.DELIVERY_FEE}</span>
        </div>
        <div className="total">
          <span>Total Amount</span>
          <span>₹ {mrp + AppConstants.DELIVERY_FEE}</span>
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
