import { NavLink } from "react-router-dom";
import logo from '../../../../public/logo.jpg'
import userDefaultPic from '../../../assets/user.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";




const NavBar = () => {
    const [hide, setHide] = useState(true);
    const { user, logOut, loading } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have successfully Logged Out! ",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch()
    }
    const navLinks = <>
        <li ><NavLink to="/">Home</NavLink></li>
        <li ><NavLink to="/PetListing">Pet Listing</NavLink></li>
        <li ><NavLink to="/DonationCampaigns">Donation Campaigns</NavLink></li>



    </>
    return (

        <div>
            <div className="navbar  bg-base-100 max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl font-semibold">
                            {navLinks}
                        </ul>
                    </div>
                    <img className='max-w-[150px] max-h-[150px]' src={logo} alt="" />
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl ">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex  items-center gap-2 ">



                    {/* <div className='flex justify-center items-center'>
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
    
                                                
                                                     <img src={userDefaultPic} />
                                                
                                            </div>
                                        </label>
                                        <div className='flex justify-center items-center'>
                                            
                                            <button className="btn bg-green-600 hover:bg-green-700 text-xl">Log Out</button>
                                        </div>
                                    </div> */}

                    {/* <details>
                            <summary>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
    
                                                
                                                     <img src={userDefaultPic} />
                                                
                                            </div>
                                        </label>
                            </summary>
                            <ul className="p-2 bg-base-100">
                                <li><a>Dashboard</a></li>
                                <li><a> <div className='flex justify-center items-center'>
                                            
                                            <button className="btn bg-green-600 hover:bg-green-700 text-xl">Log Out</button>
                                        </div></a></li>
                            </ul>
                        </details> */}

                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        { user &&
                            <button onClick={() => setHide(!hide)} type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                {/* <span className="sr-only">Open user menu</span> */}
                                {/* <img className="w-8 h-8 rounded-full" src={userDefaultPic} alt="user photo"/> */}
                                {user?.photoURL ? <img className="w-8 h-8 rounded-full" src={user.photoURL} />
                                    : <img className="w-8 h-8 rounded-full" src={userDefaultPic} alt="user photo" />
                                }
                            </button>
                        }
                        {/* <!-- Dropdown menu --> */}
                        {
                            user && <div className={`z-50 ${hide ? 'hidden' : ''} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown" >
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900 dark:text-white">{user?.displayName}</span>
                                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <NavLink to='/dashboard' href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</NavLink>
                                    </li>


                                    <li>
                                        <button onClick={handleLogOut} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</button>
                                    </li>
                                </ul>
                            </div>
                        }
                        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>


                    <NavLink className="btn bg-green-600 hover:bg-green-700 text-xl font-light text-white" to='/login'>LOGIN/REGISTER</NavLink>



                </div>

            </div>
        </div>
    );

};

export default NavBar;