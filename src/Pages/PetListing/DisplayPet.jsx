

import { Link } from "react-router-dom";


const DisplayPet = ({ user }) => {
    const { id,PetImage,PetName,PetLocation,PetAge,PetCategory,shortDescription,LongDescription,DateOfAdvertisement } = user || {};
    
    return (
        <div className="mr-2">
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={PetImage} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold"> Name:{PetName}</h1>
                        <p className="py-2  font-bold">Location:{PetLocation}</p>
                        <p className="py-2">Age: {PetAge}yr.</p>
                        <p className="py-2">Date of Advertisement: {DateOfAdvertisement}</p>
                        
                        
                        <div className="flex gap-2">
                        <Link to={`/displayPet/${id}`}><button className="btn bg-green-600 hover:bg-green-700">View Details</button></Link>
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayPet;