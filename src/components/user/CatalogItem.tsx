import defaultImgUrl from "../../assets/img.jpg";

interface Props {
  title: string;
  id: string;
  price: string;
  qtyRemaining: string;
  quantity: number;
  imgUrl?: string;
  onAdd?: (id: string, val: number) => void;
  onRemove?: (id: string, val: number) => void;
}

function CatalogItem({
  title,
  id,
  price,
  qtyRemaining,
  quantity,
  imgUrl = defaultImgUrl,
  onAdd,
  onRemove,
}: Props) {
  const onAddQty = () => {
    if (onAdd) {
      onAdd(id, quantity);
    }
  };

  const onSubtractQty = () => {
    if (onRemove) {
      onRemove(id, quantity);
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
