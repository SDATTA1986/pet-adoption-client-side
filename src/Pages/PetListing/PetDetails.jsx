import {  useParams } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import NavBar from "../Shared/NavBar/NavBar";

        

const PetDetails = () => {
    const { id } = useParams();
    console.log(id);
    const [allPets, setAllPets] = useState([]);
    useEffect(() => {
        fetch('https://pet-adoption-server-side-iota.vercel.app/pet')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllPets(data);
            }
            )
    }, [])
    console.log(allPets);
    const singlePet = allPets.find(Pet => Pet.id === parseInt(id));
    console.log(singlePet);
    const { user } = useContext(AuthContext);
    const {PetImage,PetName,PetLocation,PetAge,PetCategory,ShortDescription,LongDescription,DateOfAdvertisement } = singlePet || {};
    
    
    // const button = document.getElementById("myButton");
    // const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    // const [quantity, setQuantity] = useState(Quantity);
    // const [quantity, setQuantity] = useState(singlePet?.Quantity || 0);
    // console.log(Quantity);
    // useEffect(() => {
    //     if (singlePet && !(quantity >0)) {
    //       setIsButtonDisabled(true);
    //     }
    //   }, [singlePet,quantity]);
    // Get the current date in the format "YYYY-MM-DD"
//     function getCurrentDate() {
//         const now = new Date();
//         const year = now.getFullYear();
//         const month = (now.getMonth() + 1).toString().padStart(2, '0'); // January is 0
//         const day = now.getDate().toString().padStart(2, '0');
//         return `${year}-${month}-${day}`;
//     }
// console.log(getCurrentDate());
   
    
    const handleCart=e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const phone = e.target.phoneNumber.value;
        const address = e.target.address.value;
        console.log(email,name,phone,address);
        // const borrowedDate = e.target.borrowedDate.value;
        // const returnDate = e.target.returnDate.value;
        // setQuantity(quantity-1);
        // console.log(quantity);
        
        // if (quantity > 0) {
        //     // Use the functional form of setQuantity to ensure updates are based on the previous state
        //     setQuantity(prevQuantity => prevQuantity - 1);
        //     // Update Quantity variable as well
        //     Quantity = Quantity - 1;
        // } else {
        //     setQuantity(0);
        //     Quantity = 0;
        // }
    
        // const Data = {
        //     Quantity,
        // };
        // // console.log(Quantity);
        
        // fetch(`https://library-management-system-server-fawn.vercel.app/Book/${_id}`, {
        //     method: "PATCH",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(Data),
        //   })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data);
        // })
        const myData={
            email,name,phone,address
        };
        console.log(myData);
        
        fetch("https://pet-adoption-server-side-iota.vercel.app/userDetails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(myData),
          })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have successfully submitted adoption request!",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        
    }


   
    

    return (
        <div>
            <NavBar></NavBar>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={PetImage} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">Name:{PetName}</h1>
                        
                        <p className="py-2">Location: <span className="text-2xl font-bold">{PetLocation}</span></p>
                        <p className="py-2">Category: <span className="text-2xl font-bold">{PetCategory}</span></p>
                        <p className="py-2">Date of Advertisement: <span className="text-2xl font-bold">{DateOfAdvertisement}</span></p>
                        <p className="py-2 ">Age: <span className="text-2xl font-bold">{PetAge}</span>yr.</p>
                        <p className="py-2 ">Short Description: <span className="text-2xl font-bold">{ShortDescription}</span> </p>
                        <p className="py-2 ">Long Description: <span className="text-2xl font-bold">{LongDescription}</span> </p>
                        
                        <div className="flex gap-2">
                            <button id="myButton" className="btn bg-green-600 hover:bg-green-700" onClick={() => document.getElementById('my_modal_1').showModal()}
                            
                            >Adopt</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    {/* <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p> */}
                                    <div className="px-6 py-6 lg:px-8">
                                        
                                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Fill Up The Form</h3>
                                        <form onSubmit={handleCart} className="space-y-6" action="#">
                                            <div className="form-control">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" defaultValue={user?.displayName} disabled />
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" defaultValue={user.email} disabled />
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                                <input type="tel" name="phoneNumber" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                                <input type="text" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required />
                                            </div>
                                            <div className="modal-action"> 
                                            
                                            <button  type="submit" className="btn" >Submit</button>
                                            
                                            </div>
                                            
                                        </form>
                                    </div>
                                    <div className="modal-action"> 
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button  type="submit" className="btn" >Close</button>
                                        </form>
                                     </div>
                                </div>
                            </dialog>
                            {/* <Link to={`/updateProduct/${_id}`}><button className="btn  bg-green-600 hover:bg-green-700">Read</button></Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PetDetails;