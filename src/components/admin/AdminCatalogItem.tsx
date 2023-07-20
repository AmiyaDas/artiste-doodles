import { useState } from "react";
import EditCatalogItem from "./EditCatalogItem";
import DeleteCatalogItem from "./DeleteCatalogItem";

function AdminCatalogItem() {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleEditEvent = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteEvent = () => {
    setShowDelete(!showDelete);
  };

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <img src="./src/assets/img.jpg" className="list-img" />
        <span className="item-info">Cras justo odio</span>
        <button type="button" className="btn" onClick={handleEditEvent}>
          <i className="bi bi-pencil-fill"></i>
        </button>
        {showEdit && <EditCatalogItem />}
        <button type="button" className="btn" onClick={handleDeleteEvent}>
          <i className="bi bi-trash3-fill"></i>
        </button>
        {showEdit && <DeleteCatalogItem />}
        {/* <i className="bi bi-9-circle"></i> */}
      </li>
    </ul>
  );
}

export default AdminCatalogItem;
