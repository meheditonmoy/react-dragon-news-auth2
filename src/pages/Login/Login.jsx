import { Link, useLocation } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";



const Login = () => {

    const {signInUser}  =  useContext(AuthContext);
    const location = useLocation();
    console.log('Locationin the logIn page',location);
    const navigate= useNavigate()

    // error handleing
    const [logInError, setLogInError] =  useState();
    const [success, setSuccess] = useState();


    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const from =new FormData(e.currentTarget);
        const email = from.get('email');
        const password  = from.get('password');
        console.log(email, password)

        // reset message
        setLogInError('');
        setSuccess('');

        signInUser(email, password)
        .then(result => {
            console.log(result.user)
            setSuccess('LogIn Successfully')

            // navigate after logIn
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
                console.error(error)        
            setLogInError("Worng Password")
        })
    }

    return (
        <div>
            <Navber></Navber>
            <div>
                <h3 className="text-3xl text-center font-semibold">Please LogIn</h3>
                <form onSubmit={handleSubmit} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <p className="text-red-700">{logInError}</p>
                    {
                        <p className="text-green-600">{success}</p>
                    }
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-2">Do not have an account <Link to='/register' className="text-blue-600 font-bold hover:underline">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;