import { useState } from "react";
import EditCatalogItem from "./EditCatalogItem";
import DeleteCatalogItem from "./DeleteCatalogItem";

interface Props {
  title: string;
  price: string;
  quantity: string;
  imgUrl?: string;
}

function AdminCatalogItem({
  title,
  price,
  quantity,
  imgUrl = "./src/assets/img.jpg",
}: Props) {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleEditEvent = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteEvent = () => {
    setShowDelete(!showDelete);
  };

  return (
    <li className="list-item">
      <img src={imgUrl} className="list-img" />
      <div className="item-info">
        <span className="item-info-title">{title}</span>
        <span className="item-info-subtitle">
          {"Qty Left: " + quantity} <br />
          {"₹" + price}
        </span>
      </div>
      <div className="item-buttons">
        <button
          type="button"
          className="btn btn-light"
          onClick={handleEditEvent}
        >
          <i className="bi bi-pencil-fill"></i>
        </button>
        {showEdit && <EditCatalogItem />}
        <button
          type="button"
          className="btn btn-light"
          onClick={handleDeleteEvent}
        >
          <i className="bi bi-trash3-fill"></i>
        </button>
        {showEdit && <DeleteCatalogItem />}
      </div>
    </li>
  );
}

export default AdminCatalogItem;
