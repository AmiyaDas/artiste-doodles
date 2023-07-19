import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function AddCatalogItem() {
  let initialObj = {
    name: "",
    description: "",
    qty: "",
    price: "",
    img: "",
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [inputs, setInputs] = useState(initialObj);
  const [file, setFile] = useState<string | Blob>("");

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  function handleFileChange(event: any) {
    setFile(event.target.files[0]);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const url = "http://localhost:3000/uploadFile";
    const formData = new FormData();
    formData.append("image", file);
    // formData.append("fileName", file.name);
    formData.append("name", inputs.name);
    formData.append("description", inputs.description);
    formData.append("qty", inputs.qty);
    formData.append("price", inputs.price);
    // const config = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // };
    // axios.post(url, formData, config).then((response) => {
    //   console.log(response.data);
    // });
    console.log(inputs);
    console.log(file);
    // alert(inputs);
  };

  return (
    <>
      <div className="d-grid gap-2 col-12">
        <button className="btn btn-primary" onClick={handleShow}>
          Add New Item
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                id="desc"
                name="description"
                value={inputs.description || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Quantity</label>
              <input
                type="text"
                className="form-control"
                id="qty"
                name="qty"
                value={inputs.qty || ""}
                onChange={handleChange}
              />
            </div>
            <label className="form-label">Price</label>
            <div className="input-group mb-3">
              <span className="input-group-text">₹</span>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                aria-label="Amount (to the nearest rupees)"
                value={inputs.price || ""}
                onChange={handleChange}
              />
              <span className="input-group-text">.00</span>
            </div>
            <div className="mb-3">
              <label className="form-label">Choose Image</label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={handleFileChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Item
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCatalogItem;
