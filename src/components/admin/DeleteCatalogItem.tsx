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

function DeleteCatalogItem() {
  let initialObj = {
    name: "",
    description: "",
    qty: "",
    price: "",
    img: "",
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const handleDelete = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Just making sure, you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete this item
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteCatalogItem;
