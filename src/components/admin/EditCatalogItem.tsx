function EditCatalogItem() {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <img src="./src/assets/img.jpg" className="list-img" />
        Cras justo odio
        <button type="button" className="btn btn-light edit" >
  
          <i className="bi bi-pencil-square"></i>
        </button>
        <button type="button" className="btn btn-light delete">
          <i className="bi bi-trash3"></i>
        </button>
         
        <i className="bi bi-1-circle"></i>
      </li>
    </ul>
  );
}

export default EditCatalogItem;
