import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  getDatabase,
  ref as dbreference,
  update,
  serverTimestamp,
} from "firebase/database";
import app from "../../../firebase";
import {
  getStorage,
  ref as storagereference,
  uploadBytes,
  deleteObject,
} from "firebase/storage";

const db = getDatabase(app);
const storage = getStorage(app);

interface Props {
  title: string;
  price: string;
  quantity: string;
  imgUrl?: string;
  id: string;
  desc: string;
}

const EditCatalogItem = ({
  title,
  price,
  quantity,
  imgUrl = "./src/assets/img.jpg",
  id,
  desc,
}: Props) => {
  let initialObj = {
    name: title,
    description: desc,
    qty: quantity,
    price: price,
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
    const reference = dbreference(db, "items/" + id);
    update(reference, {
      id: id,
      name: inputs.name,
      description: inputs.description,
      qty: inputs.qty,
      price: inputs.price,
      dateAdded: serverTimestamp(),
      fileName: file?.name,
    });

    const storageRef = storagereference(storage, "items/" + imgUrl);
    // Delete the file
    deleteObject(storageRef)
      .then(() => {
        // File deleted successfully
        // handleShowToast();
      })
      .catch((error: any) => {
        console.log(error);
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
      <button type="button" className="btn btn-light" onClick={handleShow}>
        <i className="bi bi-pencil-fill"></i>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit This Item</Modal.Title>
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
                value={title}
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
                value={desc}
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
                value={quantity}
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
                value={price}
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
            Update Item
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditCatalogItem;
