import { flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { useContext, useMemo, useState } from "react";
import { FaPencilAlt, FaThumbsUp, FaTrash } from "react-icons/fa";
// import { useLoaderData } from "react-router-dom";
import './MyPet.css'
// import { AuthContext } from "../../../providers/AuthProvider";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import { Link } from "react-router-dom";
import usePet from "../../../Components/hooks/UsePet";
import Swal from "sweetalert2";

import useAxiosPublic from "../../../Components/hooks/useAxiosPublic";



const MyPet = () => {
    // const myPet = useLoaderData();
    // const { user } = useContext(AuthContext);
    // const myPet = mPet.filter((Pet) => Pet.email === user.email)

    // Add a serial number to each row in the data
    const [myPet, refetch] = usePet();
    const axiosPublic = useAxiosPublic();
    const data = useMemo(() => {
        // Add a serial number to each row in the data
        // myPet.forEach((pet) => {
        //     console.log(pet.Adopted);
        //     pet.Adopted = Boolean(pet.Adopted)
        //     console.log(pet.Adopted);
        // });
        const dataWithSerialNumber = myPet.map((pet, index) => ({
            ...pet,
            serialNumber: index + 1,
            _id: pet._id,
            Adopted:Boolean(pet.Adopted)
            
            
        }));

        return dataWithSerialNumber;
    }, [myPet]);
    const handleUpdate = (row) => {
        // Handle update action for the row
        console.log("Update clicked for row:", row);
    };

    const handleDelete = (_id) => {
        // Handle delete action for the row
        console.log("Delete clicked for row:", _id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/Pets/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    };

    const handleAdopted = (_id) => {
        // Handle adopted action for the row
        console.log("Adopted clicked for row:", _id);
        axiosPublic.patch(`/Pets/adopted/${_id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have successfully adopted pet",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    };
    const columns = [
        {
            header: 'Serial Number',
            accessorKey: 'serialNumber'
        },
        {
            header: 'Pet Name',
            accessorKey: 'PetName'
        },
        {
            header: 'Pet Category',
            accessorKey: 'PetCategory'
        },
        {
            header: 'Pet Image',
            accessorKey: 'PetImage'
        },
        {
            header: 'Adoption Status',
            accessorKey: 'Adopted',
            cell: ( {row} ) =>{
                const value = row.original.Adopted;
                console.log(value); // Add this line to log the value
        return value ? "Adopted" : "Not Adopted";
            } 
            // (value ? "Adopted" : "Not Adopted"),
        },
        {
            header: 'Actions',
            cell: ({ row }) => (
                <div className="flex flex-col gap-2">
                    <Link to={`/UpdatePet/${row.original._id}`}>
                        <btn className="btn w-full" onClick={() => handleUpdate(row.original)} title="Update">
                            <FaPencilAlt />Update
                        </btn ></Link>
                    <btn className="btn" onClick={() => handleDelete(row.original._id)} title="Delete">
                        <FaTrash />Delete
                    </btn >
                    {
                        row.original.Adopted===false ? <btn className="btn" onClick={() => handleAdopted(row.original._id)} title="Adopted">
                        <FaThumbsUp />Adopted
                    </btn >: "Already Adopted"
                    }
                </div>
            ),
        },
    ]

    const [sorting, setSorting] = useState([]);
    const table = useReactTable({
        data, columns, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel(), getSortedRowModel: getSortedRowModel(),
        state: {
            sorting: sorting,
        },
        onSortingChange: setSorting
    });

    console.log(myPet);





    return (
        <div>
            <h1 className="text-3xl font-extrabold text-center">My ADDED PETS</h1>
            <table className="text-center mx-auto mt-8 my-table">
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th onClick={header.column.getToggleSortingHandler()} className="pb-2 pr-2" key={header.id}>
                                {flexRender(
                                    header.column.columnDef.header, header.getContext()
                                )}
                                {
                                    { asc: <AiOutlineSortAscending />, desc: <AiOutlineSortDescending /> }[header.column.getIsSorted() ?? null]
                                }
                            </th>
                        ))}
                    </tr>
                ))}
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {
                myPet.length > 0 && <div className="join flex justify-center mt-4">

                    <button
                        disabled={!table.getCanPreviousPage()}
                        onClick={() => table.previousPage()}
                        className="join-item btn "
                    >
                        «
                    </button>
                    <button
                        disabled={!table.getCanNextPage()}
                        onClick={() => table.nextPage()}
                        className="join-item btn "
                    >
                        »
                    </button>

                </div>
            }
        </div>
    );
};

export default MyPet;