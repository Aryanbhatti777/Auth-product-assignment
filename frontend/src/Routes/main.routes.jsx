import { createBrowserRouter } from "react-router";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Home from "../pages/Home.jsx";
import CreateProduct from "../components/CreateProduct.jsx";
import Products from "../components/Products.jsx";
import ProductDetails from "../components/productDetails.jsx";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Login />
        
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/home",
        element: <Home />,
        children: [
            {
                index: true,
                element: <Products/>
            }
            ,
            {
                path: "/home/createProduct",
                element: <CreateProduct/>
            },
            {
                path: "/home/productDetails/:id",
                element: <ProductDetails/>
            }
        ]
    }
    
])

export default router