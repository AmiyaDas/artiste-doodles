import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  getDatabase,
  ref as dbreference,
  set,
  serverTimestamp,
  remove,
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
  id: string;
  imgName: string;
  handleConfirm?: () => void;
}

const DeleteCatalogItem = ({ id, imgName, handleConfirm }: Props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (event: any) => {
    event.preventDefault();
    console.log("deleted");
    handleClose();
    if (handleConfirm) {
      handleConfirm();
    }
    let idt = id;
    let img = imgName;
    // const reference = dbreference(db, "items/" + id);
    // remove(reference);

    // const storageRef = storagereference(storage, "items/"+imgName);

    // // Delete the file
    // deleteObject(storageRef)
    //   .then(() => {
    //     // File deleted successfully
    //     handleShowToast();
    //   })
    //   .catch((error: any) => {
    //     console.log(error);
    //   });
  };

  return (
    <>
      <button type="button" className="btn btn-light" onClick={handleShow}>
        <i className="bi bi-trash3-fill"></i>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete this item</Modal.Title>
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
};

export default DeleteCatalogItem;
