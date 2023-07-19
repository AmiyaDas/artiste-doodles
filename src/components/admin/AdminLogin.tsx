import { useState } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const onLogin = () => {
    // Submit form results
    if (userName == "neha" && password) {
      if (password == "Neha@14694") {
        setShowError(false);
        navigate("/adminCatalog", {
          replace: true,
          state: { bookName: "Fake Title" },
        });
      }
    } else {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
        setUserName("");
        setPassword("");
      }, 2000);
    }
  };

  const handleUserName = (event: any) => {
    setUserName(event.target.value);
  };
  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="admin-login">
        <h4>Login</h4>
        <input
          className="form-control"
          type="text"
          placeholder="Username"
          onChange={handleUserName}
        ></input>
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          onChange={handlePassword}
        ></input>
        <button type="button" className="btn btn-default" onClick={onLogin}>
          Login
        </button>

        {showError ? (
          <div className="alert alert-danger" role="alert">
            Wrong username or password!
          </div>
        ) : null}
      </div>
    </>
  );
}

export default AdminLogin;
