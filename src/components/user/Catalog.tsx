import CatalogItem from "./CatalogItem";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDatabase, ref as databaseref, onValue } from "firebase/database";
import app from "../../../firebase";

const db = getDatabase(app);
const IMAGE_URL =
  "https://firebasestorage.googleapis.com/v0/b/artistedoodles-1.appspot.com/o/items%2F";
const IMAGE_URL_SUFFIX = "?alt=media";

function Catalog() {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  const fetchItems = () => {
    const itemsRef = databaseref(db, "items/");
    // const itemsImageReference = storageref(storage, "/items/");

    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      setItems(Object.values(data));
    });

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
    // console.log(items);
  }, []);

  const listItems = items.map((item: any) => {
    return (
      <CatalogItem
        key={item.id}
        title={item.name}
        price={item.price}
        qtyRemaining={item.qty}
        imgUrl={IMAGE_URL + item.fileName + IMAGE_URL_SUFFIX}
      />
    );
  });

  const onProceed = () => {
    navigate("/checkout", { replace: true, state: { data: true } });
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
