import { useState } from "react";
import Header from "../Header";
import { useLocation } from "react-router-dom";

function OrderForm() {
  let initialFormInputs = {
    name: "",
    phone: "",
    email: "",
    add1: "",
    add2: "",
    pin: "",
    city: "",
    state: "",
  };

  const [inputs, setInputs] = useState(initialFormInputs);
  let orderData = useLocation().state;

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    if (name === "pin") {
      //fetch city and state and set to data
    }
  };

  const onPlaceOrder = () => {
    orderData["userData"] = inputs;
    console.log(orderData);
  };

  return (
    <>
      <Header />
      <form className="order-user-form">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={inputs.phone || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address Line 1</label>
          <input
            type="text"
            className="form-control"
            id="add1"
            name="add1"
            value={inputs.add1 || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address Line 2</label>
          <input
            type="text"
            className="form-control"
            id="add2"
            name="add2"
            value={inputs.add2 || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">PIN Code</label>
          <input
            type="number"
            className="form-control"
            id="pin"
            name="pin"
            value={inputs.pin || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            {inputs.city + ", " + inputs.state}
          </label>
        </div>
      </form>
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

export default OrderForm;
