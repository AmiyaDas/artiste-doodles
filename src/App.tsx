import "./App.css";
import Catalog from "./components/user/Catalog";
import ListCatalog from "./components/admin/ListCatalog";
import AdminLogin from "./components/admin/AdminLogin";
import PageNotFound from "./PageNotFound";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/user/Checkout";
import OrderForm from "./components/user/OrderForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order" element={<OrderForm />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/adminCatalog" element={<ListCatalog />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
