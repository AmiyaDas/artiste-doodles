interface Props {
  title: string;
  price: string;
  quantity: string;
  imgUrl?: string;
}

function EditCatalogItem({
  title,
  price,
  quantity,
  imgUrl = "./src/assets/img.jpg",
}: Props) {
  const onEditItem = () => {
    console.log("Edit clicked");
  };
  const onDeleteItem = () => {
    console.log("delete clicked");
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
        <button type="button" className="btn btn-light" onClick={onEditItem}>
          <i className="bi bi-pencil-fill"></i>
        </button>
        <button type="button" className="btn btn-light" onClick={onDeleteItem}>
          <i className="bi bi-trash3-fill"></i>
        </button>
      </div>
    </li>
  );
}

export default EditCatalogItem;
