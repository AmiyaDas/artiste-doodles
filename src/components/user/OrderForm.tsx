import { useState, useEffect } from "react";
import Header from "../Header";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getDatabase,
  ref as dbreference,
  set,
  serverTimestamp,
} from "firebase/database";
import app from "../../../firebase";
const db = getDatabase(app);
function OrderForm() {
  const navigate = useNavigate();
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
  let initialErrors = {
    name: "",
    phone: "",
    email: "",
    add1: "",
    pin: "",
  };

  const [inputs, setInputs] = useState(initialFormInputs);
  const [errors, setErrors] = useState<any>(initialErrors);
  const [showToast, setShowToast] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  let orderData = useLocation().state;
  console.log(orderData);
  useEffect(() => {
    if (
      Object.values(errors).filter((obj: any) => obj.length > 0).length === 0 &&
      submitting
    ) {
      // console.log("submit should be here");
      finishSubmit();
    }
  }, [errors]);

  const toggleShowToast = () => {
    setShowToast(!showToast);
  };

  const validateValues = (inputs: any) => {
    let errors = {
      name: "",
      phone: "",
      email: "",
      add1: "",
      pin: "",
    };
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let phoneno = /^\d{10}$/;
    let zipRegex = /^\d{5}$/;
    if (inputs.name.length < 2) {
      errors.name = "Name is too short";
    }
    if (!inputs.email.match(validRegex)) {
      errors.email = "Please enter correct email address";
    }
    if (!inputs.phone.match(phoneno)) {
      errors.phone = "Please enter a 10 digit phone number";
    }
    if (inputs.add1.length < 10) {
      errors.add1 = "Address is too short";
    }
    if (inputs.pin.match(zipRegex)) {
      errors.pin = "Enter 6 digit numeric zip code";
    }
    return errors;
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    if (name === "pin") {
      //fetch city and state and set to data
    }
  };

  const onPlaceOrder = (event: any) => {
    event.preventDefault();
    setErrors(validateValues(inputs));
    setSubmitting(true);
  };

  const handleToastClose = () => {
    navigate("/", {
      replace: true,
    });
  };
  const finishSubmit = () => {
    orderData["userData"] = inputs;
    const reference = dbreference(db, "userdetails/" + Date.now());
    set(reference, {
      id: Date.now(),
      billing: orderData["billing"],
      orderItems: orderData["items"],
      orderData: orderData["userData"],
      dateAdded: serverTimestamp(),
    });
    toggleShowToast();
  };

  return (
    <>
      <Header />
      {!showToast ? (
        <form className="order-user-form" onSubmit={onPlaceOrder}>
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
            {errors.name ? <p className="error">{errors.name}</p> : null}
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
            {errors.phone ? <p className="error">{errors.phone}</p> : null}
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
            {errors.email ? <p className="error">{errors.email}</p> : null}
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
            {errors.add1 ? <p className="error">{errors.add1}</p> : null}
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
            {errors.pin ? <p className="error">{errors.pin}</p> : null}
          </div>
          <div className="mb-3">
            <label className="form-label">
              {inputs.city + ", " + inputs.state}
            </label>
          </div>
        </form>
      ) : null}
      <nav className="navbar fixed-bottom footer-btn">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onPlaceOrder}
        >
          Place Order
        </button>
      </nav>
      <div
        className={
          "toast align-items-center order-toast" + (showToast ? " show" : "")
        }
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex bottom-50 start-50">
          <div className="toast-body">Order Placed successfully!</div>
          <button
            type="button"
            className="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={handleToastClose}
          ></button>
        </div>
      </div>
    </>
  );
}

export default OrderForm;
