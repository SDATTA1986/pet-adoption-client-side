

import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";


import {FaGithub, FaGoogle} from 'react-icons/fa';


import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

import useAxiosSecure from "../../../Components/hooks/useAxiosSecure";
import NavBar from "../NavBar/NavBar";


const Login = () => {
    const axiosSecure=useAxiosSecure();
    const {signIn,createGoogleLogin,createGithubLogin}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email,password)
        .then(()=>{
            e.target.email.value='';
            e.target.password.value='';
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You have successfully logged in!",
                showConfirmButton: false,
                timer: 1500
              });
            navigate(location?.state?location.state:'/');
        })
        .catch(error=>{
            
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.message}`,
                
              });
        })
    }
    const handleGoogleLogin=()=>{
        createGoogleLogin()
        .then((result)=>{
            console.log(result.user);
            const userInfo={
                email:result.user?.email,
                name:result.user?.displayName,
                role: Boolean(0),
                photoURL: result.user?.photoURL
            }
            axiosSecure.post('/users',userInfo)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You have successfully logged in!",
                showConfirmButton: false,
                timer: 1500
              });
            navigate(location?.state?location.state:'/');
        })
        .catch(error=>{
            console.log(error.message);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.message}`,
                
              });
        })
    }

    const handleGithubLogin=()=>{
        createGithubLogin()
        .then((result)=>{
            console.log(result.user);
            const userInfo={
                email:result.user?.email,
                name:result.user?.displayName,
                role: Boolean(0),
                photoURL: result.user?.photoURL
            }
            axiosSecure.post('/users',userInfo)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You have successfully logged in!",
                showConfirmButton: false,
                timer: 1500
              });
            navigate(location?.state?location.state:'/');
        })
        .catch(error=>{
            console.log(error.message);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.message}`,
                
              });
        })
    }
    return (
        <div>
           <NavBar></NavBar>

            <h3 className="text-3xl my-10 text-center">Login With</h3>
            <button onClick={handleGoogleLogin} className="btn bg-green-600 hover:bg-green-700 text-xl font-light text-white flex items-center justify-center mx-auto mb-10 w-1/3">
                <FaGoogle className=""></FaGoogle>
                 Google
            </button>
            <hr className="w-[500px] mx-auto"></hr>
            <p className="text-center">Or</p>
            <hr className="w-[500px] mx-auto mb-4"></hr>
            <button onClick={handleGithubLogin} className="btn bg-green-600 hover:bg-green-700 text-xl font-light text-white flex items-center justify-center mx-auto mb-10 w-1/3">
                <FaGithub className=""></FaGithub>
                 Github
            </button>
            <hr className="w-[500px] mx-auto"></hr>
            <p className="text-center">Or</p>
            <hr className="w-[500px] mx-auto"></hr>

            <div>
                <h2 className="text-3xl my-10 text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
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
                    <div className="form-control mt-6">
                        <button className="btn bg-green-600 hover:bg-green-700 text-xl font-light text-white">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Don't have an account? Please <Link className="text-green-700 font-bold" to='/register'>Register</Link></p>
            </div>


        </div>
    );
};

export default Login;