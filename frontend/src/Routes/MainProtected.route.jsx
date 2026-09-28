import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router";


const MainProtected = () => {

    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to={"/"} replace/>
    }

    return <Outlet/>
}

export default MainProtected;