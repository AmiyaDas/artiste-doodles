import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { onValue, ref, remove } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";
import HomeCarousel from "../HomeCarousel";
import "./ProductPage.scss";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  let { productId } = useParams();
  const storage = getStorage();
  const navigateTo = useNavigate();

  const [productDetails, setProductDetails] = useState({});
  const [imagesList, setImagesList] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  let discount = 0;

  useEffect(() => {
    try {
      setProductDetails({});
      const query = ref(db, "products/" + productId);
      return onValue(query, async (snapshot) => {
        const data = snapshot.val();
        if (snapshot.exists()) {
          discount = 100 - Math.round((data.price * 100) / data.mrp);

          const images = data.images.split(",");
          let imageUrls = [];
          for (const imageName of images) {
            const imageUrl = await getDownloadURL(
              storageRef(storage, "products/" + imageName)
            );
            imageUrls.push(imageUrl);
          }
          setImagesList(imageUrls);
          setProductDetails(data);
        }
      });
    } catch (error) {
      console.log("Unknown error occured!:productDetails");
      console.log(error);
      alert("Unknown error occured!:productDetails");
    }
  }, []);

  const handleProductDelete = async () => {
    if (confirm("Do you want to delete this product?")) {
      const query = ref(db, "products/" + productId);
      await remove(query);
      navigateTo("/admin/products");
    }
  };

  return (
    <div className="productPage">
      <div className="productImage">
        <HomeCarousel imageUrls={imagesList} />
      </div>
      <div className="productDetails">
        {/* <div className="titleSection"> */}
        <div className="productTitle">{productDetails.title}</div>
        <div className="reviewStars">
          ★★★★☆ <span>(34 reviews)</span>
        </div>

        <div className="price">
          <span className="originalPrice">{"₹" + productDetails.mrp}</span>
          {"₹" + productDetails.price}{" "}
          <span className="discount">{"(" + discount + "% OFF)"}</span>
        </div>

        <div className="quantitySelector">
          <button onClick={decreaseQty}>−</button>
          <span>{quantity}</span>
          <button onClick={increaseQty}>+</button>
        </div>

        <div className="actions">
          <button className="addToCart">Add to Cart</button>
          <button className="activeButton" onClick={handleProductDelete}>
            Buy Now
          </button>
        </div>

        <div className="description">{productDetails.description}</div>
        <div className="specifications">
          <div className="detailsHeader">Product Details:</div>
          <table>
            <tbody>
              {Object.keys(productDetails).map((key) => {
                return (
                  <tr>
                    <td>{key}:</td>
                    <td>
                      <b>{productDetails[key]}</b>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
