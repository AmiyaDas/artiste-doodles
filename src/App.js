import Home from "./components/Home";
import "./App.scss";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AdminLogin from "./components/admin/AdminLogin";
import ProductList from "./components/admin/ProductList";


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
        }
    ])
    return (
        <div className='app'>
            <RouterProvider router={routers}/>
        </div>
    )
}

export default App;