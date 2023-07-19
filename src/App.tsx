import "./App.css";
import Catalog from "./components/user/Catalog";
import ListCatalog from "./components/admin/ListCatalog";
import AdminLogin from "./components/admin/AdminLogin";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/adminCatalog" element={<ListCatalog />} />
    </Routes>
  );
}

export default App;
