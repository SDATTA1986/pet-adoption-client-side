

import { Link } from "react-router-dom";


const DisplayCampaign = ({ user }) => {
    const { id,PetImage,PetName,maxDonationAmount,donatedAmount,DateOfCreation,LastDonationDate } = user || {};
    
    return (
        <div className="mr-2">
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={PetImage} className=" rounded-lg shadow-2xl w-1/2" />
                    <div>
                        <h1 className="text-xl font-bold"> Name:{PetName}</h1>
                        <p className="py-2  font-bold">Maximum Donation Amount:{maxDonationAmount}</p>
                        <p className="py-2">Donated Amount: {donatedAmount}</p>
                        <p className="py-2">Date of Advertisement: {DateOfCreation}</p>
                        <p className="py-2">Last Date for Donation: {LastDonationDate}</p>
                        
                        
                        
                        <div className="flex gap-2">
                        <Link to={`/displayCampaign/${id}`}><button className="btn bg-green-600 hover:bg-green-700">View Details</button></Link>
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayCampaign;