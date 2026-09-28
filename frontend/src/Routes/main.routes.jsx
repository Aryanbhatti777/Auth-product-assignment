import { createBrowserRouter } from "react-router";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Home from "../pages/Home.jsx";


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
    }
    
])

export default router