import CatalogItem from "./CatalogItem";
import Header from "../Header";
import AppConstants from "../../AppConstants";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDatabase, ref as databaseref, onValue } from "firebase/database";
import app from "../../../firebase";

const db = getDatabase(app);

function Catalog() {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  const onAddItem = (id: string, val: number) => {
    let newItems: any = items.map((item: any) => {
      if (item.id == id && val < parseInt(item.qty)) {
        item.quantity = val + 1;
      }
      return item;
    });
    setItems(newItems);
  };

  const onRemoveItem = (id: string, val: number) => {
    let newItems: any = items.map((item: any) => {
      if (item.id == id && val > 0) {
        item.quantity = val - 1;
      }
      return item;
    });
    setItems(newItems);
  };

  const fetchItems = () => {
    const itemsRef = databaseref(db, "items/");
    // const itemsImageReference = storageref(storage, "/items/");

    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      setItems(Object.values(data));
    });

    // code for fetching all the images/files from backend
    //   listAll(itemsImageReference)
    //     .then((res) => {
    //       res.items.forEach((itemRef) => {
    //         // console.log(itemRef.fullPath);
    //         // console.log(itemRef.name);
    //         getDownloadURL(itemRef)
    //           .then((url) => {
    //             const xhr = new XMLHttpRequest();
    //             xhr.responseType = "blob";
    //             xhr.onload = (event) => {
    //               const blob = xhr.response;
    //               // console.log(event);
    //               images.push(blob);
    //               // console.log(blob);
    //             };
    //             xhr.open("GET", url);
    //             xhr.send();
    //           })
    //           .catch((error) => {
    //             switch (error.code) {
    //               case "storage/object-not-found":
    //                 break;
    //               case "storage/unauthorized":
    //                 break;
    //               case "storage/canceled":
    //                 break;
    //               case "storage/unknown":
    //                 break;
    //             }
    //           });
    //       });
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const listItems = items.map((item: any) => {
    return (
      <CatalogItem
        key={item.id}
        id={item.id}
        title={item.name}
        price={item.price}
        qtyRemaining={item.qty}
        quantity={item.quantity ? item.quantity : 0}
        imgUrl={
          AppConstants.IMAGE_URL + item.fileName + AppConstants.IMAGE_URL_SUFFIX
        }
        onAdd={onAddItem}
        onRemove={onRemoveItem}
      />
    );
  });

  const onProceed = () => {
    let selectedItems = items.filter((item: any) => {
      if (item.quantity && item.quantity > 0) {
        return true;
      }
    });
    navigate("/checkout", { replace: false, state: selectedItems });
  };

  return (
    <div>
      <Header />
      <ul className="list-group">{listItems}</ul>
      <nav className="navbar fixed-bottom footer-btn">
        <button type="button" className="btn btn-primary" onClick={onProceed}>
          Proceed
        </button>
      </nav>
    </div>
  );
}

export default Catalog;
