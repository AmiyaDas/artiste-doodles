import { useNavigate } from "react-router-dom";
import Header from "./components/Header";

function PageNotFound() {
  const navigate = useNavigate();

  const onNavHome = () => {
    navigate("/");
  };
  return (
    <>
      <Header />{" "}
      <div className="page-not-found">
        <div className="section">
          <h2 className="error">404</h2>
          <div className="page">
            Ooops!!! The page you are looking for is not found
          </div>
          <a className="back-home" onClick={onNavHome}>
            Back to home
          </a>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
