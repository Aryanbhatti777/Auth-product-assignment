import { createBrowserRouter } from "react-router";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import PublicProtected from "./PublicProtected.route.jsx";
import MainProtected from "./MainProtected.route.jsx";
import Home from "../pages/Home.jsx";


const router = createBrowserRouter([

    {
        path: "/",
        element: <PublicProtected />,
        children: [
            {
                index: true,
                element: <Login/>
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },
    {
        path: "/home",
        element: <MainProtected />,
        children: [
            {
                index: true,
                element: <Home />,
                
            }
        ]
    }
    
])

export default router