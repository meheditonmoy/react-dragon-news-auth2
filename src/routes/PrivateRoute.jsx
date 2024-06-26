import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate,useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname)

    if(loading){
        return <div className="flex justify-center mt-40">
            <span className="loading loading-dots loading-lg "></span>
        </div>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;