import { useState, useEffect } from "react";
import defaultImgUrl from "../../assets/img.jpg";
import { getDatabase, ref as databaseref, onValue } from "firebase/database";
import {
  getStorage,
  ref as storageref,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import app from "../../../firebase";

interface Props {
  title: string;
  price: string;
  qtyRemaining: string;
  imgUrl?: string;
}

const db = getDatabase(app);
const storage = getStorage(app);

function CatalogItem({
  title,
  price,
  qtyRemaining,
  imgUrl = defaultImgUrl,
}: Props) {
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState([]);

  let images: any = [];
  const fetchItems = () => {
    const itemsRef = databaseref(db, "items/");
    const itemsImageReference = storageref(storage, "/items/");

    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      setItems(data);
    });

    listAll(itemsImageReference)
      .then((res) => {
        res.items.forEach((itemRef) => {
          // console.log(itemRef.fullPath);
          // console.log(itemRef.name);
          getDownloadURL(itemRef)
            .then((url) => {
              const xhr = new XMLHttpRequest();
              xhr.responseType = "blob";
              xhr.onload = (event) => {
                const blob = xhr.response;
                console.log(event);
                images.push(blob);
              };
              xhr.open("GET", url);
              xhr.send();
            })
            .catch((error) => {
              switch (error.code) {
                case "storage/object-not-found":
                  break;
                case "storage/unauthorized":
                  break;
                case "storage/canceled":
                  break;
                case "storage/unknown":
                  break;
              }
            });
        });
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fetchItems();
  }, []);

  console.log(items);

  const onAddQty = () => {
    if (quantity < parseInt(qtyRemaining)) {
      setQuantity(quantity + 1);
    }
  };

  const onSubtractQty = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <li className="list-item">
      <img src={imgUrl} className="list-img" />
      <div className="item-info">
        <span className="item-info-title">{title}</span>
        <span className="item-info-subtitle">
          {"Qty Left: " + qtyRemaining} <br />
          {"₹" + price}
        </span>
      </div>
      <div className="item-buttons">
        <button type="button" className="btn btn-light" onClick={onSubtractQty}>
          -
        </button>
        <span className=" badge-secondary">{quantity}</span>
        <button type="button" className="btn btn-light" onClick={onAddQty}>
          +
        </button>
      </div>
    </li>
  );
}

export default CatalogItem;
