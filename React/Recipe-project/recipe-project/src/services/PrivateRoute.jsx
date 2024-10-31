import { useContext } from "react"
import AuthContext from "../Context/AuthContext"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({element}) => {
    const {isAuthenticated} = useContext(AuthContext)
    return isAuthenticated? element: <Navigate to="/"/>
}

export default PrivateRoute