import imgUrl from "../../assets/img.jpg";

function CatalogItem() {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <img src={imgUrl} className="list-img" />
        <span className="item-info">Cras justo odio</span>
        <button type="button" className="btn btn-light">
          -
        </button>
        <span className=" badge-secondary">14</span>
        <button type="button" className="btn btn-light">
          +
        </button>
        {/* <i className="bi bi-1-circle"></i> */}
      </li>
    </ul>
  );
}

export default CatalogItem;
