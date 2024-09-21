import Home from "./components/Home";
import "./App.scss";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AdminLogin from "./components/admin/AdminLogin";
import ProductList from "./components/admin/ProductList";
import AddProduct from "./components/admin/AddProduct";


function App() {
    const routers = createBrowserRouter([
       {
            path:"/",
            element:<Home />
        },
        {
            path:"/admin",
            element:<AdminLogin />
        },
        {
            path:"/admin/products",
            element:<ProductList />
        },
        {
            path:"/admin/addProduct",
            element:<AddProduct />
        }
    ])
    return (
        <div className='app'>
            <RouterProvider router={routers}/>
        </div>
    )
}

export default App;