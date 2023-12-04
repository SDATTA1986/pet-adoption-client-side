

import { useQuery } from "@tanstack/react-query";

import {  FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Components/hooks/useAxiosSecure";
import useAxiosPublic from "../../../Components/hooks/useAxiosPublic";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const axiosPublic=useAxiosPublic();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    // const handleAdopted = (_id) => {
    //     // Handle adopted action for the row
    //     console.log("Adopted clicked for row:", _id);
    //     axiosPublic.patch(`/Pets/adopted/${_id}`)
    //     .then(res=>{
    //         console.log(res.data);
    //         if(res.data.modifiedCount>0){
    //             refetch();
    //             Swal.fire({
    //                 position: "top-end",
    //                 icon: "success",
    //                 title: "You have successfully adopted pet",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               });
    //         }
    //     })
    // };

    
    

    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Profile Picture</th>
                            <th>Role</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td style={{ maxWidth: '300px', wordBreak: 'break-all' }}>{user.photoURL}</td>
                                <td>
                                    { user.role === true ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-sm bg-green-500">
                                        <FaUsers className="text-white 
                                        "></FaUsers>Make Admin
                                    </button>}
                                </td>
                                
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
