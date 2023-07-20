import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  getDatabase,
  ref as dbreference,
  set,
  serverTimestamp,
} from "firebase/database";
import app from "../../../firebase";
import {
  getStorage,
  ref as storagereference,
  uploadBytes,
} from "firebase/storage";

const db = getDatabase(app);
const storage = getStorage(app);

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
  const [file, setFile] = useState<Blob | File>();

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
    console.log(Date.now());
    const reference = dbreference(db, "items/" + Date.now());
    set(reference, {
      id: serverTimestamp(),
      name: inputs.name,
      description: inputs.description,
      qty: inputs.qty,
      price: inputs.price,
      dateAdded: serverTimestamp(),
      fileName: file?.name,
    });

    if (file) {
      const itemsImageRef = storagereference(storage, "items/" + file.name);
      uploadBytes(itemsImageRef, file).then((snapshot) => {
        console.log("Uploaded a blob or file!", snapshot);
      });
    }
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
