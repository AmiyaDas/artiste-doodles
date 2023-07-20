import { useState } from "react";
import defaultImgUrl from "../../assets/img.jpg";
interface Props {
  title: string;
  price: string;
  qtyRemaining: string;
  imgUrl: string;
}

function CatalogItem({ title, price, qtyRemaining, imgUrl }: Props) {
  const [quantity, setQuantity] = useState(0);

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
      <img src={defaultImgUrl} className="list-img" />
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
