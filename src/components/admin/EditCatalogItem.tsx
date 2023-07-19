function EditCatalogItem() {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <img src="./src/assets/img.jpg" className="list-img" />
        <span className="item-info">Cras justo odio</span>
        <button type="button" className="btn">
          <i className="bi bi-pencil-fill"></i>
        </button>
        <button type="button" className="btn">
          <i className="bi bi-trash3-fill"></i>
        </button>
        {/* <i className="bi bi-9-circle"></i> */}
      </li>
    </ul>
  );
}

export default EditCatalogItem;
