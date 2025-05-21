import React, { useState } from "react";
import "./Test.scss";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="productPage">
      <div className="productImage">
        <img
          src="https://m.media-amazon.com/images/I/81ZyhojFz9L._AC_UY1100_.jpg"
          alt="Teejh Silver Anklets"
        />
      </div>

      <div className="productDetails">
        <h1>Teejh Single Line Silver Oxidized Ghungroo Anklets</h1>

        <div className="reviewStars">
          ★★★★☆ <span>(34 reviews)</span>
        </div>

        <div className="price">
          <span className="originalPrice">₹999.00</span>
          ₹209.00 <span className="discount">Save 79%</span>
        </div>

        <div className="emiNote">
          or 3 Monthly Payments of ₹70 ● Teejh Easy EMI ● Cards Accepted ● 0
          Extra Cost
        </div>

        <div className="quantitySelector">
          <button onClick={decreaseQty}>−</button>
          <span>{quantity}</span>
          <button onClick={increaseQty}>+</button>
        </div>

        <div className="actions">
          <button className="addToCart">Add to Cart</button>
          <button className="buyNow">Buy it Now</button>
        </div>

        <div className="description">
          Teejh Single Line Silver Oxidized Ghungroo Anklets that spell
          delicate, classic and understated. The anklets are asserting the fact
          that delicate does not have to be boring. The chain anklets have a
          playful touch of ghungroos, which breaks the bore out of it. This pair
          of anklets are perfect for the ones who like to keep minimal in their
          style and also for your day-to-day office outfits.
        </div>

        <div className="specifications">
          <h2>Specifications</h2>
          <table>
            <tbody>
              <tr>
                <td>Colour</td>
                <td>Silver Oxidised</td>
              </tr>
              <tr>
                <td>Material</td>
                <td>Mixed Metal</td>
              </tr>
              <tr>
                <td>Closure</td>
                <td>S-Hook, Non-Adjustable</td>
              </tr>
              <tr>
                <td>Measurements</td>
                <td>Length: 27cm &nbsp; Breadth: 0.5cm</td>
              </tr>
              <tr>
                <td>Package Content</td>
                <td>1 Pair of Anklets</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
