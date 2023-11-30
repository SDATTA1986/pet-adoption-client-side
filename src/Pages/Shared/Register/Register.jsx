

import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";


import { FaGoogle } from 'react-icons/fa';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import axiosSecure from "../../../Components/hooks/useAxiosSecure";


const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { createUser, upProfile } = useContext(AuthContext);
    const regex1 = /^[^A-Z]*$/;
    const regex2 = /^[^\W_]*$/;
    const handleRegister = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const Name = e.target.name.value;
        // const Photo = e.target.photoURL.value;
        // let Photo;
        const image = e.target.image.files[0];
        console.log(image);
        const imageFile = { image: image }
        const res = await axiosSecure.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data);
        
         const Photo=res.data.data.display_url;
        
        

        if (password.length < 6) {


            Swal.fire({
                icon: "error",
                title: "Sorry...",
                text: "Password should be at least 6 characters or longer!",

            });

            return;
        }
        if (regex1.test(password) && !regex2.test(password)) {

            Swal.fire({
                icon: "error",
                title: "Sorry...",
                text: "Password should contain at least one capital letter!",

            });

            return;
        }
        if (regex2.test(password) && !regex1.test(password)) {

            Swal.fire({
                icon: "error",
                title: "Sorry...",
                text: "Password should contain at least one special character!",

            });


            return;
        }
        if (regex2.test(password) && regex1.test(password)) {

            Swal.fire({
                icon: "error",
                title: "Sorry...",
                text: "Password should contain at least one special character and at least one capital letter!",

            });

            return;
        }

        createUser(email, password)
            .then(() => {

                upProfile(Name, Photo)
                    .then(() => {
                        navigate(location?.state ? location.state : '/');
                        e.target.reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "You have successfully logged in!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                    .catch()
            })
            .catch(error => {

                Swal.fire({
                    icon: "error",
                    title: "Sorry...",
                    text: `${error.message}`,

                });
            }
            )

    }
    return (
        <div>
            {/* <Navbar></Navbar> */}

            <div>
                <h2 className="text-3xl my-10 text-center">Please Register</h2>
                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name="name" placeholder=" Full Name" className="input input-bordered" required />
                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="PhotoURL" className="input input-bordered" />
                    </div> */}
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
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Upload Image</span>
                        </label>
                        <input type="file" name="image" className="file-input w-full max-w-xs" required/>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-green-600 hover:bg-green-700 text-xl font-light text-white">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? Please <Link className="text-green-700 font-bold" to='/login'>Login</Link></p>
            </div>


        </div>
    );
};

export default Register;