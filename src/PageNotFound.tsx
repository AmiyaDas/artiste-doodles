function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="section">
        <h1 className="error">404</h1>
        <div className="page">
          Ooops!!! The page you are looking for is not found
        </div>
        <a className="back-home" href="#!">
          Back to home
        </a>
      </div>
    </div>
  );
}

export default PageNotFound;
