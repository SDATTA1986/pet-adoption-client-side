

import { NavLink, Outlet } from "react-router-dom";

import { MdAddCircleOutline } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { IoGitPullRequest } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
import { FaDonate, FaEdit, FaUser } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";
import { useEffect, useState } from "react";

const DashboardLayout = () => {
    const isAdmin=true;
    return (
        <div>
            
            <div className="flex">
            <div className="w-64 min-h-screen bg-green-400">
                {/* <ul className="menu">
                    <li>
                      
                    <NavLink to="/dashboard/addPet"><MdAddCircleOutline />Add a Pet</NavLink>
                    </li>
                    <li>
                      
                    <NavLink to="/dashboard/MyPet"><FaCartPlus />My Added Pets</NavLink>
                    </li>
                    <li>
                      
                    <NavLink to="/dashboard/MyPet"><GrUpdate />Update Pet</NavLink>
                    </li>
                    <li>
                      
                    <NavLink to="/dashboard/request"><IoGitPullRequest />Adoption Request</NavLink>
                    </li>
                    
                    <li>
                      
                    <NavLink to="/dashboard/createCampaign"><MdCreateNewFolder />Create Donation Campaign</NavLink>
                    </li>
                    <li>
                      
                    <NavLink to="/dashboard/myCampaign"><FaDonate />My Donation Campaigns</NavLink>
                    </li>
                    <li>
                      
                    <NavLink to="/dashboard/myDonation"><BiSolidDonateHeart />My Donations</NavLink>
                    </li>
                    <li>
                      
                    <NavLink to="/dashboard/editDonation"><FaEdit></FaEdit> Donation</NavLink>
                    </li>
                </ul> */}
                <ul className="menu">
                    {
                        isAdmin? <>
                        <li>
                      
                      <NavLink to="/dashboard/users"><FaUser />Users</NavLink>
                      </li>
                      <li>
                      
                    <NavLink ><FaCartPlus />All Pets</NavLink>
                    </li>
                    <li>
                      
                    <NavLink ><FaDonate />All Donations</NavLink>
                    </li>
                    <li>
                      
                    <NavLink to="/dashboard/addPet"><MdAddCircleOutline />Add a Pet</NavLink>
                    </li>
                    <li>
                      
                    <NavLink to="/dashboard/MyPet"><FaCartPlus />My Added Pets</NavLink>
                    </li>
                    <li>
                      
                    <NavLink to="/dashboard/MyPet"><GrUpdate />Update Pet</NavLink>
                    </li>
                    <li>
                      
                    <NavLink to="/dashboard/request"><IoGitPullRequest />Adoption Request</NavLink>
                    </li>
                    
                    <li>
                      
                    <NavLink to="/dashboard/createCampaign"><MdCreateNewFolder />Create Donation Campaign</NavLink>
                    </li>
                    <li>
                      
                    <NavLink to="/dashboard/myCampaign"><FaDonate />My Donation Campaigns</NavLink>
                    </li>
                    <li>
                      
                    <NavLink to="/dashboard/myDonation"><BiSolidDonateHeart />My Donations</NavLink>
                    </li>
                    <li>
                      
                    <NavLink to="/dashboard/editDonation"><FaEdit></FaEdit> Donation</NavLink>
                    </li>
                        </>
                        :
                        <>
                        <li>
                      
                      <NavLink to="/dashboard/addPet"><MdAddCircleOutline />Add a Pet</NavLink>
                      </li>
                      <li>
                        
                      <NavLink to="/dashboard/MyPet"><FaCartPlus />My Added Pets</NavLink>
                      </li>
                      <li>
                        
                      <NavLink to="/dashboard/MyPet"><GrUpdate />Update Pet</NavLink>
                      </li>
                      <li>
                        
                      <NavLink to="/dashboard/request"><IoGitPullRequest />Adoption Request</NavLink>
                      </li>
                      
                      <li>
                        
                      <NavLink to="/dashboard/createCampaign"><MdCreateNewFolder />Create Donation Campaign</NavLink>
                      </li>
                      <li>
                        
                      <NavLink to="/dashboard/myCampaign"><FaDonate />My Donation Campaigns</NavLink>
                      </li>
                      <li>
                        
                      <NavLink to="/dashboard/myDonation"><BiSolidDonateHeart />My Donations</NavLink>
                      </li>
                      <li>
                        
                      <NavLink to="/dashboard/editDonation"><FaEdit></FaEdit> Donation</NavLink>
                      </li>
                        </>
                    }
                    
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
        </div>
    );
};

export default DashboardLayout;